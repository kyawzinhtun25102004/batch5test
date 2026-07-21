$(document).ready(function(){
    $('.addToCart').click(function(){
        let id = $('this').date('id');
        let name= $('this').data('name');
        let price=$('this').data('price');

        console.log(id, name, price);
        let items={
            id: id,
            name:name,
            price: price,
            qty: 1

        }
        
        let itemString= localStorage.getItem('itShop');
        let itemArray;
        if(itemString == null){
            itemArray=[];

        } else{
            itemArray =JSON.parse(itemString);
        }

        let status =false;
        $.each(itemArray, function(i,v){
            if(v.id == id){
                v.qty++;
                status=true;
            }
        })

        if(status == false){
            itemArray.push(items);

        }

        let itemData =JSON.stringify(itemArray);
        localStorage.setItem('itshop', itemData)
            
    })
})
    
