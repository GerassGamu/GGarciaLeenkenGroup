CREATE DATABASE GGarciaLeenkenGroup
USE GGarciaLeenkenGroup



CREATE TABLE Estado
(
IdEstado INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
Nombre VARCHAR(50)
);


INSERT INTO Estado VALUES ('Guanajuato')


select*from Estado


CREATE TABLE Empleado
(
IdEmpleado INT IDENTITY(1,1)PRIMARY KEY NOT NULL,
NumeroNomina VARCHAR(10),
Nombre VARCHAR(100),
ApellidoPAterno VARCHAR(100),
ApellidoMaterno VARCHAR(100),
IdEstado INT,
CONSTRAINT FK_EstadoEmpleado FOREIGN KEY (IdEmpleado)
    REFERENCES Empleado(IdEmpleado)
);

INSERT INTO Empleado VALUES ('ENE-1','Arturo','Peréz','Correa',1),
('ENE-2','Raúl','Perea','Correa',2),
('ENE-3','Camilo','Juárez','Correa',3),
('ENE-4','Adrián','Castillo','Correa',4),
('ENE-5','José','Gayosso','Sotero',5)


select*from Empleado


/*STORE ESTADO*/
CREATE PROCEDURE EstadoGetAll
AS
SELECT
IdEstado,
Nombre

FROM Estado



--Get all Empleado--
CREATE PROCEDURE EmpleadoGetAll
AS
SELECT
		[IdEmpleado]
      ,[NumeroNomina]
      ,[Empleado].[Nombre]
      ,[Empleado].[ApellidoPaterno]
      ,[ApellidoMaterno]
      ,[Empleado].[IdEstado]
	  ,[Estado].[Nombre]

	  
FROM Empleado


INNER JOIN Estado ON Empleado.IdEstado=Estado.IdEstado

--Get By Id Empleado---

CREATE PROCEDURE GetAllEstado
AS
SELECT
IdEstado,
Nombre

FROM Estado



--Get all Empleado--
ALTER PROCEDURE EmpleadoGetById 
@IdEmpleado INT
AS
SELECT
		[IdEmpleado]
      ,[NumeroNomina]
      ,[Empleado].[Nombre]
      ,[Empleado].[ApellidoPaterno]
      ,[ApellidoMaterno]
      ,[Empleado].[IdEstado]
	  ,[Estado].[Nombre] AS NombreEstado

	  
FROM Empleado


INNER JOIN Estado ON Empleado.IdEstado=Estado.IdEstado

WHERE IdEmpleado=@IdEmpleado



/*ADD*/
CREATE PROCEDURE EmpleadoAdd

@NumeroNomina VARCHAR(10),
@Nombre VARCHAR(100),
@ApellidoPaterno VARCHAR(100),
@ApellidoMaterno VARCHAR(100),
@IdEstado INT
AS
INSERT INTO Empleado (NumeroNomina,Nombre,ApellidoPaterno,ApellidoMaterno,IdEstado) VALUES(@NumeroNomina,@Nombre,@ApellidoPaterno,@ApellidoMaterno,@IdEstado);

EmpleadoAdd 'ENE-6','María','Ramos','Del Ángel',6
EmpleadoGetAll

/*UPDATE*/


CREATE PROCEDURE EmpleadoUpdate
@IdEmpleado INT,
@NumeroNomina VARCHAR(10),
@Nombre VARCHAR(100),
@ApellidoPaterno VARCHAR(100),
@ApellidoMaterno VARCHAR(100),
@IdEstado INT
AS
UPDATE Empleado SET NumeroNomina=@NumeroNomina,Nombre=@Nombre,ApellidoPaterno=@ApellidoPaterno,ApellidoMaterno=@ApellidoMaterno,IdEstado=@IdEstado

WHERE IdEmpleado=@IdEmpleado


EmpleadoUpdate 1,'ENE-1','Gabriel','Peréz','Correa',1
EmpleadoGetAll

/*DELETE*/
CREATE PROCEDURE EmpleadoDelete
@IdEmpleado INT
AS
DELETE FROM Empleado

WHERE IdEmpleado=@IdEmpleado


EmpleadoDelete 6
EmpleadoGetAll


EstadoGetAll