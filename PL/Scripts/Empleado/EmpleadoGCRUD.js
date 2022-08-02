$(document).ready(function () { //click
    GetAll();
    EstadoGetAll();
});
/*EMPLEADO GET ALL */
function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1825/api/EmpleadoController/GetAll',
        success: function (result) { //200 OK 
            $('#tblEmpleado tbody').empty();
            $.each(result.Objects, function (i, empleado) {
                var filas =
                    '<tr>'
                    + '<td class="text-center"> '
                    + '<a href="#" onclick="GetById(' + empleado.IdEmpleado + ')">'
                    + '<img  style="height: 25px; width: 25px;" src="../img/edit.ico" />'
                    + '</a> '
                    + '</td>'
                    + "<td  id='id' class='text-center'>" + empleado.IdEmpleado + "</td>"
                    + "<td class='text-center'>" + empleado.NumeroNomina + "</td>"
                    + "<td class='text-center'>" + empleado.Nombre + "</td>"
                    + "<td class='text-center'>" + empleado.ApellidoPaterno + "</ td>"
                    + "<td class='text-center'>" + empleado.ApellidoMaterno + "</td>"
                    + "<td class='text-center'>" + empleado.Estado.IdEstado + "</td>"
                    + "<td class='text-center'>" + empleado.Estado.Nombre + "</td>"
                    //+ '<td class="text-center">  <a href="#" onclick="return Eliminar(' + subCategoria.IdSubCategoria + ')">' + '<img  style="height: 25px; width: 25px;" src="../img/delete.png" />' + '</a>    </td>'
                    + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + empleado.IdEmpleado + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

                    + "</tr>";
                $("#SubCategorias tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};
/*ESTADO*/
function EstadoGetAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1825/api/EstadoController/GetAll',
        success: function (result) {
            $("#ddlEstados").append('<option value="' + 0 + '">' + 'Seleccione una opción' + '</option>');
            $.each(result.Objects, function (i, estado) {
                $("#ddlEstados").append('<option value="'
                    + estado.IdEstado + '">'
                    + estado.Nombre + '</option>');
            });
        }
    });
}


/*ADD*/
function Add() {

    var empleado = {
        IdEmpleado: 0,
        Nombre: $('#txtNumeroNomina').val(),
        Nombre: $('#txtNombre').val(),
        Nombre: $('#txtApellidoPaterno').val(),
        Nombre: $('#txtApellidoMaterno').val(),
        Estado: {
            IdEstado: $('#ddlEstados').val()
        }
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1825/api/EmpleadoController/Add',
        dataType: 'json',
        data: empleado,
        success: function (result) {
            $('#myModal').modal();
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};

/*BY ID*/

function GetById(IdEmpleado) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1825/api/EstadoController/GetById/' + IdEmpleado,
        success: function (result) {
            $('#txtIdEmpleado').val(result.Object.IdEmpleado);
            $('#txtNumeroNomina').val(result.Object.NumeroNomina);
            $('#txtNombre').val(result.Object.Nombre);
            $('#txtApellidoPaterno').val(result.Object.ApellidoPaterno);
            $('#txtApellidoMaterno').val(result.Object.ApellidoMaterno);
            $('#ddlEstados').val(result.Object.Estado.IdEstado);
            $('#ModalForm').modal('show');
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }


    });

}

/*UPDATE*/
function Update() {

    var empleado = {
        IdEmpleado: 0,
        Nombre: $('#txtNumeroNomina').val(),
        Nombre: $('#txtNombre').val(),
        Nombre: $('#txtApellidoPaterno').val(),
        Nombre: $('#txtApellidoMaterno').val(),
        Estado: {
            IdEstado: $('#ddlEstados').val()
        }
    }

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:1825/api/EmpleadoController/Update',
        datatype: 'json',
        data: empleado,
        success: function (result) {
            $('#myModal').modal();
            $('#ModalUpdate').modal('hide');
            GetAll();
            Console(respond);
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });

};


/*DELETE*/
function Eliminar(IdEmpleado) {

    if (confirm("¿Estas seguro de eliminar la SubCategoria seleccionada?")) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:1825/api/EmpleadoController/Delete/' + IdEmpleado,
            success: function (result) {
                $('#myModal').modal();
                GetAll();
            },
            error: function (result) {
                alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
            }
        });

    };
};