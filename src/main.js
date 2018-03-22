var sha256 = require('js-sha256');
var $ = require('jquery');

function hash(m, n) {
  return sha256(m + n.toString())
}

function compute_hash() {
  var blockhash = $('#latest-block-hash').val();
  var nonce = $('#nonce').val();
  var h = hash(blockhash, nonce);
  var message = "Result: \n" + h;
  alert(message);
}

$.getJSON( "https://bch-bitcore3.trezor.io/api/blocks?limit=1", function( data ) {
  console.log(data['blocks']);
  var blockhash = data['blocks'][0]["hash"];
  $('#latest-block-hash').html(blockhash)
});

$('input:visible').eq(0).focus();

$(function(){
  $('#nonce-form').submit(function(){
    compute_hash();

    return false;
  })

  $('#compute').on('click', function() {
    compute_hash();
  });
});
