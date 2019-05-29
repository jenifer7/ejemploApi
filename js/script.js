var urlV = "https://ghibliapi.herokuapp.com";

function

$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "https://ghibliapi.herokuapp.com/people",
    datatype:"json",

      success:function(data){

          $.each(data, function(i, item){
            var one = '<tr>'
                      +  '<td>' + item.name + '</td>'
                      +  '<td>' + item.gender + '</td>'
                      +  '<td>' + item.age + '</td>' +
                      '</tr>';
            $("#personas>tbody").append(one);
          });
      },
  });

  $.ajax({
    type: "GET",
    url: "https://ghibliapi.herokuapp.com/films",
    datatype:"json",

      success:function(data){

          $.each(data, function(i, item){
            var row = '<tr>'
                      +  '<td>' + item.title + '</td>'
                      +  '<td>' + item.description + '</td>'
                      +  '<td>' + item.director + '</td>'
                      +  '<td>' + item.producer + '</td>' +
                      '</tr>';
            $("#filmes>tbody").append(row);
          });
      },
  });

  $.ajax({
    type: "GET",
    url: "https://ghibliapi.herokuapp.com/locations",
    datatype:"json",

      success:function(data){

          $.each(data, function(i, item){
            var two = '<tr>'
                      +  '<td>' + item.name + '</td>'
                      +  '<td>' + item.climate + '</td>'
                      +  '<td>' + item.terrain + '</td>' +
                      '</tr>';
            $("#locat>tbody").append(two);
          });
      },
  });
});
