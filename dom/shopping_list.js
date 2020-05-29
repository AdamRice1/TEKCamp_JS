let item1 = document.getElementById('list');
    let item2 = document.getElementById('item');
    let item3 = document.getElementById('btn');
    let counter = 0;

    function boom(){
      console.log("And here we go")
      let item_2 = document.getElementById('item').value
      let item2 = document.getElementById('item');
      let item1 = document.getElementById('list');
      let new_item1 = document.createElement('li');
      let new_item2 = document.createElement('span');
      let new_item3 = document.createElement('button')
      new_item3.id = 'new_btn'
      new_item1.class = counter;
      new_item3.class = counter;
      new_item3.onclick = function() {
            new_item1.remove();
      }
      let text_node2 = document.createTextNode('Delete')
      new_item3.appendChild(text_node2);
      let text_node = document.createTextNode(item2.value)
      new_item2.appendChild(text_node);
      new_item1.appendChild(new_item2);
      new_item1.appendChild(new_item3);
      item1.appendChild(new_item1);
      item_2.value = ' ';
      counter = counter + 1;
      let final = document.getElementById('item');
      final.focus();
      final.value = ''
    };