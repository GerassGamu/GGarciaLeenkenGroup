using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Empleado
    {
        public static ML.Result GetAllEF()
        {
            ML.Result result = new ML.Result();

            try
            {
                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {

                    var query = context.EmpleadoGetAll().ToList();

                    result.Objects = new List<object>();

                    if (query != null)
                    {
                        foreach (var objEmpleado in query)
                        {

                            // Instancia de la Clase Alumno
                            ML.Empleado empleado = new ML.Empleado();

                            empleado.IdEmpleado = objEmpleado.IdEmpleado;
                            empleado.NumeroNomina = objEmpleado.NumeroNomina;
                            empleado.Nombre = objEmpleado.Nombre;
                            empleado.ApellidoPaterno = objEmpleado.ApellidoPaterno;
                            empleado.ApellidoMaterno = objEmpleado.ApellidoMaterno;

                            // Instancia de la Clase Estado
                            empleado.Estado = new ML.Estado();

                            empleado.Estado.IdEstado = objEmpleado.IdEstado.Value;
                            empleado.Estado.Nombre = objEmpleado.NombreEstado;


                            result.Objects.Add(empleado);
                        }

                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se encontraron registros.";
                    }
                }
            }
            catch (Exception ex)
            {

                result.Correct = false;
                result.ErrorMessage = ex.Message;

            }

            return result;
        }

        public static ML.Result GetByIdEF(int IdEmpleado)
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {

                    var query = context.EmpleadoGetById(IdEmpleado).FirstOrDefault();

                    result.Objects = new List<object>();

                    if (query != null)
                    {



                        // Instancia de la Clase Alumno
                            ML.Empleado empleado = new ML.Empleado();

                        empleado.IdEmpleado = query.IdEmpleado;
                        empleado.NumeroNomina = query.NumeroNomina;
                        empleado.Nombre = query.Nombre;
                        empleado.ApellidoPaterno = query.ApellidoPaterno;
                        empleado.ApellidoMaterno = query.ApellidoMaterno;

                        // Instancia de la Clase Estado
                        empleado.Estado = new ML.Estado();

                        empleado.Estado.IdEstado = query.IdEstado.Value;
                        empleado.Estado.Nombre = query.NombreEstado;


                        /// Linea oara igualar el resultado de mi consulta
                        result.Object = empleado;


                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "Ocurrió un error al obtener los registros en la tabla Empleado";
                    }

                }


            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;
        }


        public static ML.Result AddEF(ML.Empleado empleado)
        {
            ML.Result result = new ML.Result();

            try
            {
                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {
                    var query = context.EmpleadoAdd(empleado.NumeroNomina, empleado.Nombre, empleado.ApellidoPaterno, empleado.ApellidoMaterno, empleado.Estado.IdEstado);


                    if (query >= 1)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se insertó el Empleado";
                    }

                    result.Correct = true;

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
            }
            return result;
        }

        public static ML.Result UpdateEF(ML.Empleado empleado)
        {
            ML.Result result = new ML.Result();
            try
            {

                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {
                    var query = context.EmpleadoUpdate(empleado.IdEmpleado, empleado.NumeroNomina, empleado.Nombre, empleado.ApellidoPaterno, empleado.ApellidoMaterno, empleado.Estado.IdEstado);
                    if (query >= 1)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se actualizó el Empleado";
                    }
                }
            }
            catch (Exception ex)
            {

                result.Correct = false;
                result.ErrorMessage = ex.Message;
            }

            return result;
        }

        public static ML.Result DeleteEF(ML.Empleado empleado)
        {
            ML.Result result = new ML.Result();
            try
            {

                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {
                    var query = context.EmpleadoDelete(empleado.IdEmpleado);
                    if (query >= 1)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se eliminó el Empleado";
                    }
                }
            }
            catch (Exception ex)
            {

                result.Correct = false;
                result.ErrorMessage = ex.Message;
            }

            return result;
        }


    }
}
