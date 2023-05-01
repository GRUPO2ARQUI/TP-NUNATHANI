module.exports = function () {
  var data = {
    Especialidad: [
      {
        id:1,
        tipoEspecialidad: "Psicología Clínica",
        centroEspecialidad: "UNMSM",
        descripcionEspecialidad:"se centra en el diagnóstico y tratamiento de problemas psicológicos y emocionales",
      },
      {
        id:2,
        tipoEspecialidad: "Psicología Social",
        centroEspecialidad: "PUCP",
        descripcionEspecialidad:"se centra en el estudio de como los individuos interactúan con su entorno social",
      },
      {
        id:3,
        tipoEspecialidad: "Psicología de la Salud",
        centroEspecialidad: "IPCC",
        descripcionEspecialidad:"se centra en el estudio de los factores psicológicos que influyen en la salud y el bienestar",
      },
      {
        id:4,
        tipoEspecialidad: "Psicología Organizacional",
        centroEspecialidad:"UPCH",
        descripcionEspecialidad:"se centra en la aplicación de la psicología a las empresas y organizaciones, incluyendo la selección y capacitación de personal",
      }
    ],
    
    estado: [
      {
        id:1,
        disponibilidad: "Disponible",
      },
      {
        id:2,
        disponibilidad: "No disponible",
      },
      {
        id:3,
        disponibilidad: "Disponible",
      },
      {
        id:4,
        disponibilidad: "Disponible",
      }
    ],
    
    usuarios: [
      {
        id: 1,
        nameUsuario: "Alvaro",
        SnameUsuario: "Gamonal",
        PassUsuario: "Odontologia",
        telusuario: "990084583"
      },
      {
        id: 2,
        nameUsuario: "Gonzalo",
        SnameUsuario: "Gamonal",
        PassUsuario: "Emergencias",
        telusuario: "988367020"
      },
    ]
   
  }
  return data
}
