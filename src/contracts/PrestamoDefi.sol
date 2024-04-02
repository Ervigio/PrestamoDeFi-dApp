//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

contract PrestamoDefi {

    // VARIABLES GLOBALES O DE ESTADO //
    address public socioPrincipal;

    struct Prestamo {
        uint256 id;
        address prestatario;            // cliente que solicita el préstamo
        uint256 monto;                  // weis, msg.value
        uint256 plazo;                  // segundos
        uint256 tiempoSolicitud;        // block.timestamp
        uint256 tiempoLimite;           // segundos
        bool aprobado;
        bool reembolsado;
        bool liquidado;

    }
   
   struct Cliente {
        bool activado;                              // Cliente registrado
        uint256 saldoGarantia;                      // Almacena garantías depositadas y vigentes por parte del cliente
        mapping (uint256 => Prestamo) prestamos;    // Relaciona el id del préstamo con el resto de datos del mismo
        uint256[] prestamoIds;                      // Listado de todos los identificadores de lso préstamos del cliente/prestatario
    }

    mapping (address => Cliente) clientes;
    mapping (address => bool) public empleadosPrestamista;

    
    // EVENTOS //
    event EmpleadoPrestamistaActivado(string);    // (*********) ¿Sería copnveniente añadirlo? o no le aporta nada al Socio Principal del contrato?
    
    event SolicitudPrestamo(
        address prestatario, 
        uint256 monto, 
        uint256 plazo
    );
    event PrestamoAprobado(address prestatario, uint256 monto);
    event PrestamoReembolsado(address prestatario, uint256 monto);
    event GarantiaLiquidado(address prestatario, uint256 monto);


    // MODIFICADORES //
    modifier soloSocioPrincipal() {
        require(msg.sender == socioPrincipal, "Error: No eres el Socio Principal");
        _;
    }

    modifier soloEmpleadoPrestamista() {            // Revisar/Verificar este modifier
        require (empleadosPrestamista[msg.sender],"Error: Apartado reservado para empleados" );
        _;
    }

    modifier soloClienteRegistrado(){
        require(clientes[msg.sender].activado,
        "Error: Hemos detectado que no te has registaro en nuestra plataforma. Por favor, date de alta para acceder.");
        _;
    }


    // FUNCIONES //
    constructor(){
        socioPrincipal = msg.sender;
        empleadosPrestamista[socioPrincipal] = true;
    }

    receive() external payable { }

    function altaPrestamista(address nuevoPrestamista) public soloSocioPrincipal  {
        require(!empleadosPrestamista[nuevoPrestamista] , 
        "Error: El usuario indicado ya ha sido dado de alta como Empleado Prestamista con anterioridad.");
        empleadosPrestamista[nuevoPrestamista] = true;

        emit EmpleadoPrestamistaActivado("Se ha asignado el Roll de Prestamista exitosamente");
    }

    function altaCliente(address nuevoCliente) public soloEmpleadoPrestamista {
        require(!clientes[nuevoCliente].activado, "Error: este usuario ya fue dado de alta anteriormente.");

        Cliente storage structNuevoCliente = clientes[nuevoCliente];

        structNuevoCliente.saldoGarantia = 0;
        structNuevoCliente.activado = true;
    }

    function depositarGarantia(address clienteRegistrado_) public payable soloClienteRegistrado  {
        require(msg.value >0, 
        "Error: El importe a depositar no puede ser igual a cero. Por favor, deposita en weis el importe equivalente a la cantidad de ether que desesas solicitar.");
        clienteRegistrado_ = msg.sender;
        clientes[clienteRegistrado_].saldoGarantia += msg.value; // revisar weis        
    }

    function solicitarPrestamos(uint256 monto_, uint256 plazo_) public soloClienteRegistrado returns(uint256) {
        require(clientes[msg.sender].saldoGarantia >= monto_, 
        "Error: Por favor, deposita en weis el importe equivalente a la cantidad de ether que desesas solicitar.");

        uint256 nuevoId = clientes[msg.sender].prestamoIds.length +1;

        Prestamo storage nuevoPrestamo = clientes[msg.sender].prestamos[nuevoId];

        nuevoPrestamo.id = nuevoId;
        nuevoPrestamo.prestatario = msg.sender;
        nuevoPrestamo.monto = monto_;
        nuevoPrestamo.plazo = plazo_;
        nuevoPrestamo.tiempoSolicitud = block.timestamp;
        nuevoPrestamo.tiempoLimite = 0;
        nuevoPrestamo.aprobado = false;
        nuevoPrestamo.reembolsado = false;
        nuevoPrestamo.liquidado = false;

        clientes[msg.sender].prestamoIds.push(nuevoId);

        emit SolicitudPrestamo(msg.sender, monto_, plazo_);

        return(nuevoId);
    }

    function aprobarPrestamo(address prestatario_, uint256 id_) public soloEmpleadoPrestamista {
        Cliente storage prestatario = clientes[prestatario_];

        require( prestatario.prestamos[id_].id> 0 && prestatario.prestamoIds.length >= id_,
        "Error: El identificador introducido no tiene ninguna Solicitud de Prestamo pendiente de aprobar para este cliente.");
        
        Prestamo storage prestamo = prestatario.prestamos[id_];

        require(!prestamo.aprobado, "Error: Este identificador corresponde a un Prestamo aprobado anteriormente.");
        require(!prestamo.reembolsado, "Error: Este identificador corresponde a un Prestamo ya reembolsado.");
        require(!prestamo.liquidado, "Error: Este identificador se corresponde a un Prestamo cuya garantia ya se ha liquidado.");

        prestamo.aprobado = true;
        prestamo.tiempoLimite = block.timestamp + prestamo.plazo;

        emit PrestamoAprobado(prestatario_, prestamo.monto);
    }

    function reembolsarPrestamo(uint256 id_) public payable soloClienteRegistrado {
        Cliente storage prestatario = clientes[msg.sender];

        require(prestatario.prestamos[id_].id > 0 &&  prestatario.prestamoIds.length >= id_ , 
        "Error: El identificador introducido no se corresponde a ningun Prestamo a su nombre.");

        Prestamo storage prestamo = prestatario.prestamos[id_];

        require(prestamo.prestatario == msg.sender, "Error: No eres el Prestatario para el identificador introducido.");
        require(prestamo.aprobado, "Error: Este identificador corresponde a un Prestamo No Aprobado aun.");
        require(!prestamo.reembolsado, "Error: Este identificador corresponde a un Prestamo ya reembolsado.");
        require(!prestamo.liquidado, "Error: Este identificador se corresponde a un Prestamo cuya garantia ya se ha liquidado.");
        require(prestamo.tiempoLimite >= block.timestamp, 
        "Error: El tiempo limite para reembolsar el prestamo ya ha finalizado. El Saldo de Garantia sera liquidado por el prestamista.");

       payable(socioPrincipal).transfer(prestamo.monto);
       prestamo.reembolsado = true;
       prestatario.saldoGarantia - prestamo.monto;

       emit PrestamoReembolsado(prestamo.prestatario, prestamo.monto);
    }

    function liquidarGarantia(address prestatario_, uint256 id_) public payable soloEmpleadoPrestamista {
        Cliente storage prestatario = clientes[prestatario_];
        
        require(prestatario.prestamos[id_].id > 0 && prestatario.prestamoIds.length >= id_ , 
        "Error: El identificador introducido no se corresponde a ningun Prestamo del Cliente indicado.");

        Prestamo storage prestamo = prestatario.prestamos[id_];

        require(prestamo.aprobado, "Error: Este identificador corresponde a un Prestamo No Aprobado aun.");
        require(!prestamo.reembolsado, "Error: Este identificador corresponde a un Prestamo ya reembolsado.");
        require(!prestamo.liquidado, "Error: Este identificador se corresponde a un Prestamo cuya garantia ya se ha liquidado.");

        payable(socioPrincipal).transfer(prestamo.monto);

        prestamo.liquidado = true;
        prestatario.saldoGarantia - prestamo.monto;

        emit GarantiaLiquidado(prestamo.prestatario, prestamo.monto);
    }

    function obtenerPrestamosPorPrestatario(address prestatario_) public view returns(uint256[] memory prestamoIds) {
        Cliente storage prestatario = clientes[prestatario_];
        return(prestatario.prestamoIds);
    }

    function obtenerDetalleDePrestamo(address prestatario_, uint256 id_) public view returns(Prestamo memory) {
        return(clientes[prestatario_].prestamos[id_]);
    }

}
