using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SL.Controllers
{
    public class EstadoController : ApiController
    {
        [Route("api/EstadoController/GetAll")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var result = BL.Estado.GetAllEF();
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