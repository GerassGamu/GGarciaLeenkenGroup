using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Estado
    {

        public static ML.Result GetAllEF()
        {
            ML.Result result = new ML.Result();

            try
            {
                using (DL.GGarciaLeenkenGroupEntities context = new DL.GGarciaLeenkenGroupEntities())
                {

                    var query = context.EstadoGetAll().ToList();

                    result.Objects = new List<object>();

                    if (query != null)
                    {
                        foreach (var objEstado in query)
                        {

                            // Instancia de la Clase Alumno
                            ML.Estado estado = new ML.Estado();

                            estado.IdEstado = objEstado.IdEstado;
                            estado.Nombre = objEstado.Nombre;
                           

                           
                            result.Objects.Add(estado);
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

    }
}
