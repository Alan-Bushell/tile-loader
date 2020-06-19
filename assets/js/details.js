var container = $('div.container');

$('input#get').click(function() {
    $.ajax({
        type: 'GET',
        url: '../assets/js/city.json',
        dataType: 'json',
        success: function(data){
            $.each(data, function(index, item){
                $.each(item, function(key, value) {
                    container.append(key + ":" + value + "</br>");
                });
                container.append('</br></br>');
            });
        }
    });
})
