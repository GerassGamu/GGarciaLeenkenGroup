using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SL.Controllers
{
    public class EmpleadoController : ApiController
    {
        
        [Route("api/EmpleadoController/GetAll")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var result = BL.Empleado.GetAllEF();
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }

        }

        [HttpGet]
        [Route("api/EmpleadoController/GetbyId/{id}")]
        // GET api/subcategoria/5
        public IHttpActionResult GetById(int id)
        {
            var result = BL.Empleado.GetByIdEF(id);

            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }
        /*ADD,UPDATE, DELETE*/

        //Metodo del servicio
        [HttpPost]
        //Ruta
        [Route("api/EmpleadoController/Add")]

        //Action con el metodo y se comprueba en el BODY de la aplicación de PostMan
        public IHttpActionResult Post([FromBody] ML.Empleado empleado)
        {
            ///Variable result manda a llamar a Metodo agregar
            var result = BL.Empleado.AddEF(empleado);

            ///Comprobacion del result correct
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }



        //Metodo del servicio
        [HttpPut]
        //Ruta
        [Route("api/EmpleadoController/Update/{IdEmpleado}")]

        //Action con el metodo y se comprueba en el BODY de la aplicación de PostMan
        public IHttpActionResult Put(int IdEmpleado, [FromBody] ML.Empleado empleado)
        {
            ///Variable result manda a llamar a Metodo modificar
            var result = BL.Empleado.UpdateEF(empleado);

            ///Comprobacion del result correct
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }


        //Metodo del servicio
        [HttpDelete]
        //Ruta
        [Route("api/EmpleadoController/Delete/{IdEmpleado}")]

        //Action con el metodo y se comprueba en el BODY de la aplicación de PostMan
        public IHttpActionResult DeleteEF(int IdEmpleado)
        {
            ///Instacia a clase Materia parabrecuperar Id
            ML.Empleado empleado = new ML.Empleado();
            ///Objeto comprobacion del Id y el parametro del idMateria
            empleado.IdEmpleado = IdEmpleado;
            ///Variable result manda a llamar a Metodo Eliminar
            var result = BL.Empleado.DeleteEF(empleado);


            ///Comprobacion del result correct
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }
    }
}