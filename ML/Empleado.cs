using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ML
{
    public class Empleado
    {
        ///Propiedades///
        public int IdEmpleado { get; set; }
        public string NumeroNomina { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }

        //Variable para llenar la lista
        public List<object> Empleados { get; set; }

        //Variable llave foranea
        public ML.Estado Estado { get; set; }

    }
}
