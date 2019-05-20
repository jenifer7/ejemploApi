$(document).ready(function(){
  $.ajax({
    type:"GET",
    url: "https://ghibliapi.herokuapp.com/people",
    datatype:"json",

    success:function(data){

      var listaP = $('#listado');
      $.each(data,function(i,item){
        listaP.append(
          '<br>'
          +  '<div>'
          +     '<p>' + item.name + '</p>'
          +     '<p>' + item.gender + '</p>'
          +     '<p>' + item.age + '</p>'
          +     '<p>' + item.species + '</p>' +
          '</div>'
        );
      });
      console.log(listaP);
    },
    error: function(){
			console.log("No se ha podido obtener la información");
		}
  });

  $.ajax({
    type:"GET",
    url: "https://ghibliapi.herokuapp.com/films/",
    datatype:"json",

    success:function(data){

      var films = $('#lista2');
      $.each(data,function(i,item){
        films.append(
          '<br>'
          +  '<div>'
          +   '<p>' + item.id + '</p>'
          +   '<p>' + item.title + '</p>' +
            '</div>'
        );
      });
    },
    error: function(){
			console.log("No se ha podido obtener la información");
		}
  });
});
