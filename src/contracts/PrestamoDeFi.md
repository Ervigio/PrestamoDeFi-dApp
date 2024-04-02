# Solidity API

## PrestamoDeFi

### Contract
PrestamoDeFi : contracts/PrestamoDeFi.sol

 --- 
### Modifiers:
### soloSocioPrincipal

```solidity
modifier soloSocioPrincipal()
```

### soloEmpleadoPrestamista

```solidity
modifier soloEmpleadoPrestamista()
```

### soloClienteRegistrado

```solidity
modifier soloClienteRegistrado()
```

 --- 
### Functions:
### constructor

```solidity
constructor() public
```

### receive

```solidity
receive() external payable
```

### altaPrestamista

```solidity
function altaPrestamista(address nuevoPrestamista) public
```

### altaCliente

```solidity
function altaCliente(address nuevoCliente) public
```

### depositarGarantia

```solidity
function depositarGarantia(address clienteRegistrado_) public payable
```

### solicitarPrestamos

```solidity
function solicitarPrestamos(uint256 monto_, uint256 plazo_) public returns (uint256)
```

### aprobarPrestamo

```solidity
function aprobarPrestamo(address prestatario_, uint256 id_) public
```

### reembolsarPrestamo

```solidity
function reembolsarPrestamo(uint256 id_) public
```

### liquidarGarantia

```solidity
function liquidarGarantia(address prestatario_, uint256 id_) public
```

### obtenerPrestamosPorPrestatario

```solidity
function obtenerPrestamosPorPrestatario(address prestatario_) public view returns (uint256[])
```

### obtenerDetalleDePrestamo

```solidity
function obtenerDetalleDePrestamo(address prestatario_, uint256 id_) public view returns (struct PrestamoDeFi.Prestamo)
```

 --- 
### Events:
### EmpleadoPrestamistaActivado

```solidity
event EmpleadoPrestamistaActivado(string)
```

### SolicitudPrestamo

```solidity
event SolicitudPrestamo(address prestatario, uint256 monto, uint256 plazo)
```

### PrestamoAprobado

```solidity
event PrestamoAprobado(address prestatario, uint256 monto)
```

### PrestamoReembolsado

```solidity
event PrestamoReembolsado(address prestatario, uint256 monto)
```

### GarantiaLiquidado

```solidity
event GarantiaLiquidado(address prestatario, uint256 monto)
```

