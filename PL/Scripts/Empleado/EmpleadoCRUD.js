// <reference path="SubCategoriaCRUD.js" />
$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1825/api/EmpleadoController/GetAll',
        success: function (result) {//200 OK
            $('#tblEmpleado tbody').empty();
            $.each(result.Objects, function (i, empleado) {
                var filas =
                    '<tr>'
                    + '<td class="text-center"> '
                    + '<a class="glyphicon glyphicon-edit"  onclick="GetById(' + empleado.IdEmpleado + ')">'
                    /*+ '<a class="glyphicon glyphicon-edit"  onclick="GetById(' + empleado.IdEmpleado + ')">'*/

                    + '</a> '
                    + '</td>'
                    + "<td  id='id' class='text-center'>" + empleado.IdEmpleado + "</td>"
                    + "<td class='text-center'>" + empleado.NumeroNomina + "</td>"
                    + "<td class='text-center'>" + empleado.Nombre + "</td>"
                    + "<td class='text-center'>" + empleado.ApellidoPaterno + "</td>"
                    + "<td class='text-center'>" + empleado.ApellidoMaterno + "</td>"
                    + "<td class='text-center'>" + empleado.Estado.Nombre + "</td>"
                    //+ "<td class='text-hide'>" + empleado.Estado.IdEstado + "</td>"
                  

                    + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + empleado.IdEmpleado + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

                    + "</tr>";


                $("#tblEmpleado tbody").append(filas);

                //CreteRow(empleado);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

        }
    });
}

function EstadoGetAll() {
    $("#ddlEstados").empty();
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
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

        }
    });
}

function Add(empleado) {

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1825/api/EmpleadoController/Add',
        dataType: 'json',
        data: empleado,
        success: function (result) {
            $('#ModalForm').modal('hide');
            $('#myModal').modal();
            GetAll();
            EstadoGetAll();

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
}

function GetById(IdEmpleado) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1825/api/EmpleadoController/GetById' + IdEmpleado,
        success: function (result) {
            $('#txtIdEmpleado').val(result.Object.IdEmpleado);
            $('#txtNumeroNomina').val(result.Object.NumeroNomina);
            $('#txtNombre').val(result.Object.Nombre);
            $('#txtApellidoPaterno').val(result.Object.ApellidoPaterno);
            $('#txtApellidoMaterno').val(result.Object.ApellidoMaterno);
            $('#ddlEstados').val(result.Object.Estado.IdEstado);

            $('#ModalForm').modal('show');
            $('#lblTitulo').modal('Modificar Empleado');
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }

    });

}

//function test() {

//    $(".boton").click(function () {

//        var valores = "";

//        // Obtenemos todos los valores contenidos en los <td> de la fila

//        // seleccionada

//        $(this).parents("tr").find("td").each(function () {

//            valores += $(this).html() + "\n";

//        });

//        //alert(valores);
//        CatEntidadFederativaGetAll();

//        $('#ModalForm').modal('show',valores);
//        $('#lblTitulo').modal('Modificar Empleado');

//    });
//}

//function Mostrar() {


//    var IdEmpleado = $('#tblIdEmpleado');
//    var NumeroNomina = $('#tblNumeroNomina');
//    var Nombre = $('#tblNombre');
//    var ApellidoPaterno = $('#tblApellidoPaterno');
//    var ApellidoMaterno = $('#tblApellidoMaterno');
//    var IdEstado = $('#tblIdEstado');

//    $(this).parents("tr").find("td").each(function () {
//        $('#txtIdEmpleado').val(IdEmpleado);
//        $('#txtNumeroNomina').val(NumeroNomina);
//        $('#txtNombre').val(Nombre);
//        $('#txtApellidoPaterno').val(ApellidoPaterno);
//        $('#txtApellidoMaterno').val(ApellidoMaterno);
//        $('#ddlEstados').val(IdEstado);
//    });

//        //CreteRow(empleado);

//    CatEntidadFederativaGetAll();

//    $('#ModalForm').modal('show');
//    $('#lblTitulo').modal('Modificar Empleado');
//}

//function CreteRow(empleado) {
//    var filas =
//        '<tr>'
//        + '<td class="text-center boton" > '
//        + '<a class="glyphicon glyphicon-edit" href="#" onclick="Mostrar()">'
//        + '</a> '
//        + '</td>'
//        + "<td id='tblIdEmpleado' class='text-center'>" + empleado.IdEmpleado + "</td>"
//        + "<td id='tblNumeroNomina' class='text-center'>" + empleado.NumeroNomina + "</td>"
//        + "<td id='tblNombre' class='text-center'>" + empleado.Nombre + "</td>"
//        + "<td id='tblApellidoPaterno' class='text-center'>" + empleado.ApellidoPaterno + "</td>"
//        + "<td id='tblApellidoMaterno' class='text-center'>" + empleado.ApellidoMaterno + "</td>"
//        + "<td id='tblIdEstado'class='text-center'>" + empleado.Estado.IdEstado + "</td>"

//        + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + empleado.IdEmpleado + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

//        + "</tr>";

//    $("#tblEmpleado tbody").append(filas);

//}

function InitializeControls() {

    $('#txtIdEmpleado').val('');
    $('#txtNumeroNomina').val('');
    $('#txtNombre').val('');
    $('#txtApellidoPaterno').val('');
    $('#txtApellidoMaterno').val('');
    $('#ddlEstados').val(0);
    $('#ModalForm').modal('show');

}

function ShowModal() {

    $('#ModalForm').modal('show');

    EstadoGetAll();

    InitializeControls();
    $('#lblTitulo').modal('Agregar Empleado');

}

function Update(empleado) {

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:1825/api/EmpleadoController/Update' ,
        dataType: 'json',
        data: empleado,
        success: function (result) {

            $('#ModalForm').modal();
            $('#myModal').modal();

            EstadoGetAll();
            Console(respond);
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });

};
/*Metodo para recuperar valores y hacer condicion si es un ADD o UPDATE*/
function Guardar() {

    var empleado = {
        IdEmpleado: $('#txtIdEmpleado').val(),
        NumeroNomina: $('#txtNumeroNomina').val(),
        Nombre: $('#txtNombre').val(),
        ApellidoPaterno: $('#txtApellidoPaterno').val(),
        ApellidoMaterno: $('#txtApellidoMaterno').val(),
        Estado: {
            IdEstado: $('#ddlEstados').val()
        }
    }
    if ($('#txtIdEmpleado').val() == "") {
        Add(empleado);
        
    }
    else {
        Update(empleado);
    }
}



/*Delete*/
function Eliminar(IdEmpleado) {

    if (confirm("¿Estas seguro de eliminar al Empleado seleccionado?")) {
        $.ajax({
            type: 'DELETE',
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