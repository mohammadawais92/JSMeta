//Create an empty array to use as a shopping list.
let shoppinglist = []
shoppinglist.push('Milk', 'Bread', 'Apples')
console.log(shoppinglist)
shoppinglist.splice(1,1,'Bananas', 'Eggs') //update Bread with different items.
console.log(shoppinglist)
let shopitem = shoppinglist.pop() //remove last item from shoppinglist.
console.log(shopitem)
console.log(shoppinglist.sort())
let finditem = shoppinglist.find(e => e == 'Milk');
    if (finditem = 'Milk')
        {console.log('Item', finditem, 'found at position', shoppinglist.indexOf(finditem))}
    else{
        console.log('Item Not found')
    }
shoppinglist.splice(1,0, 'Carrot', 'Lettuce')
console.log(shoppinglist)
let list2 = ['Juice', 'Pop']
let finallist = shoppinglist.concat(list2)
console.log(finallist)
console.log(finallist.lastIndexOf('Pop'))
console.log(finallist, 'contains', finallist.length, 'elements')


  
