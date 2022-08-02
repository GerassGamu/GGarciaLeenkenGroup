using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ML
{
    public class Estado
    {
        ///Propiedades///
        public int IdEstado { get; set; }
        public string Nombre { get; set; }
        //Variable para llenar la lista
        public List<object> Empleados { get; set; }
    }
}
