const invitados = [
  { nombre: "Hugo Pinilla y Sra", codigo: "hugop33", regalo: "Biberones Avens + Pañales Pampers 1" },
  { nombre: "Edgar Hernandez y Sra", codigo: "edgarhx92", regalo: "Muñeco musical + Pañales Pampers Recién Nacido" },
  { nombre: "Mateo Hernandez y Sofia", codigo: "mateos88", regalo: "Pañales Pampers Recién Nacido" },
  { nombre: "Sara Hernandez y Mario", codigo: "saram52", regalo: "Camisetas rojas + Pañales Pampers Recién Nacido" },
  { nombre: "Nubia Pinilla", codigo: "nubia71", regalo: "1era muda + Pañales Pampers 1" },
  { nombre: "Tomas Ortiz", codigo: "tomaso17", regalo: "Tapete de gateo plegable + Pañales Pampers 1" },
  { nombre: "Jose Saenz y Sra", codigo: "josezs29", regalo: "Sudadera talla 3 meses + Pañales Pampers 1" },
  { nombre: "Julio Cortes y Sra", codigo: "julioct76", regalo: "Conjunto talla 6 meses + Pañales Pampers 2" },
  { nombre: "Julio Cortes Saenz", codigo: "jcs88", regalo: "Pañales Pampers 2" },
  { nombre: "Santiago Cortes Saenz", codigo: "santi12", regalo: "Pañales Pampers 2" },
  { nombre: "Gabriel Saenz, Sra e Hija", codigo: "gsaenz93", regalo: "Conjunto talla 3 meses + Pañales Pampers 3" },
  { nombre: "Edgar Moreno", codigo: "edgarm81", regalo: "Cobija + Pañales Pampers 3" },
  { nombre: "Ingrid Moreno e Hija", codigo: "ingrid67", regalo: "Cojín de lactancia + Cobija" },
  { nombre: "Angel David Moreno", codigo: "angelm45", regalo: "Pañales Pampers 3" },
  { nombre: "Gabriel Moreno y Sra", codigo: "gabm22", regalo: "Sleeping 6 meses + Pañales Pampers 2" },
  { nombre: "Milena Moreno e Hija", codigo: "milena89", regalo: "Juego de toallas + Pañales Pampers 2" },
  { nombre: "Juan Gabriel Moreno Sra e Hijo", codigo: "juangm99", regalo: "Pañalera morral + Pañales Pampers 3" },
  { nombre: "Cristobal Suarez y Sra", codigo: "criss44", regalo: "Juego de sábanas + Pañales Pampers 2" },
  { nombre: "Oscar Rodriguez y Sra", codigo: "oscarx12", regalo: "Kit de higiene + Pañales Pampers 3" },
  { nombre: "Oscar Guillermo y Zulma", codigo: "ogz22", regalo: "Mameluco talla 3 meses + Pañales Pampers 3" },
  { nombre: "Felipe Pinzon y Sra", codigo: "felipez33", regalo: "Conjunto talla 3 meses + Pañales Pampers 1" },
  { nombre: "Pablo Campos y Sra", codigo: "pabloc28", regalo: "Conjunto talla 6 meses + Pañales Pampers 1" },
  { nombre: "Edilson Solano y Sra", codigo: "edils99", regalo: "Nido para bebé portátil + Pañales Pampers 2" },
  { nombre: "Sebastian Moreno", codigo: "sebas19", regalo: "Pañales Pampers 1" },
  { nombre: "Angel Ricaurte/Sra", codigo: "angelr65", regalo: "Coche reversible + Pañales Pampers 3" },
  { nombre: "Ramiro Perdomo/Sra", codigo: "rami45", regalo: "Silla de auto porta bebé + Pañales Pampers 4" },
  { nombre: "Juan Jose Perdomo y Geraldin", codigo: "juanpj78", regalo: "Bañera tipo plegable + Pañales Pampers 3" },
  { nombre: "Luz Ricuarte", codigo: "luzr80", regalo: "Bata de baño + Pañales Pampers 2" },
  { nombre: "Leonardo Portela y Sra", codigo: "leonp99", regalo: "Móvil musical + Pañales Pampers Recién Nacido" },
  { nombre: "Felipe Tellez", codigo: "feltel10", regalo: "Caminador + Pañales Pampers 2" },
  { nombre: "Miguel Galviz", codigo: "miggal26", regalo: "Silla mecedora " },
  { nombre: "Isaac Ordoñez", codigo: "isaaco43", regalo: "Pijama talla 6 meses + Pañales Pampers 3" },
  { nombre: "Alejandro Cardona", codigo: "alejoc87", regalo: "Conjunto talla 3 meses + Pañales Pampers 4" },
  { nombre: "William Garcia y Sra e Hijos", codigo: "willgar78", regalo: "Silla comedor bebé + Pañales Pampers 4" },
  { nombre: "Mairon Abella y Sra", codigo: "maironx5", regalo: "Conjunto talla 6 meses + Pañales Pampers 4" },
  { nombre: "Luis Guzman y Sra", codigo: "luisgz99", regalo: "Juego de toallas + Pañales Pampers 2" },
  { nombre: "Cristian Franco y Sra", codigo: "crisf33", regalo: "Conjunto talla 6 meses + Pañales Pampers 4" },
  { nombre: "Janeth Malagon", codigo: "janethm7", regalo: "Cuna corral" },
  { nombre: "Familia Rojas", codigo: "famroj55", regalo: "Semanario + Pañales Pampers 2" },
  { nombre: "Laura Alvarez y Sr", codigo: "lauraa60", regalo: "Bodys talla 3 meses + Pañales Pampers 4" },
  { nombre: "Lina Mican/Sr", codigo: "linamz48", regalo: "Sudadera talla 6 meses + Pañales Pampers 2" },
  { nombre: "Viviana Amaya y Hermana", codigo: "viviah92", regalo: "Conjunto talla 3 meses + Pañales Pampers 3" },
  { nombre: "Nelly Giraldo", codigo: "nellyg22", regalo: "Kit De Aseo" },
  { nombre: "Juan Esteban Maldonado", codigo: "juanm777", regalo: "Pañales Pampers etapa 3" }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const codigo = document.getElementById('codigo').value.toLowerCase().trim();
  const invitado = invitados.find(inv => inv.codigo.toLowerCase() === codigo);
  if (invitado) {
    localStorage.setItem('invitado', JSON.stringify(invitado));
    window.location.href = 'index.html';
  } else {
    alert('Código incorrecto. Intenta nuevamente.');
  }
});
