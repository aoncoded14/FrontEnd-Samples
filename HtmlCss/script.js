/*/ JQuery Code
var contract;
$(document).ready(function(){
    web3 = new web3(web3.currentProvider)
    var address = "";
    var abi = "";
    // Initialize Contract Object
    contract = new web3.eth.Contract(abi, address)
    // Read Product function from KusuSmart Contact.
    contract.methods.readProduct().call().then( (read) => 
    {
        $('#readP').html(read)
    });
    //Add Product 
    $('#appP').click(function()
    {
        var _price = 0;
        _price = $('#price').val();
        web3.eth.addProduct().then(function(products)
        {
            var prdt = products[0];
            return contract.methods.addProduct(_price).send({from: prdt});
        }).then(function(tx)
        {
            console.log(tx)
        }).catch(function(tx)
        {
            console.log(tx);
        })
    })
});
//JavaScript Code to make popup to parent page.*/
