function saveToLocalStorage(event)
        {
            event.preventDefault();
             const amount = event.target.amount.value;
             const desc = event.target.desc.value;
             const category = event.target.category.value;
            const obj =
            {
              amount,
              desc,
              category
            } 
           
            localStorage.setItem(obj.category, JSON.stringify(obj));
            showNewUserOnScreen(obj);
        }
        window.addEventListener("DOMContentLoaded", () => {
            
        for (var i=0; i<localStorage.length; i++)
        {
            var user = JSON.parse(localStorage.getItem(localStorage.key(i)))
          
            showNewUserOnScreen(user);
            }
        })
        function showNewUserOnScreen(user)
        {
            document.getElementById('amount').value = "";
            document.getElementById('category').value = "";
            document.getElementById('desc').value = "";
            
         
            const parentNode = document.getElementById('listOfUsers');
            const childHTML = `<li id=${user.desc}> ${user.amount} - ${user.category}
            <button onclick=deleteUser('${user.category}')> Delete User </button>
            <button onclick=editUserDetails('${user.category}','${user.amount}','${user.desc}')>Edit User </button>
            </li>`;
            
        
            parentNode.innerHTML = parentNode.innerHTML + childHTML;
        }

        
        function editUserDetails(category, amount, desc){

            document.getElementById('category').value = category; 
            document.getElementById('amount').value = amount;
            document.getElementById('desc').value =desc;
          

            deleteUser(category)
            }

      

        function deleteUser(category){
            console.log(category)
            localStorage.removeItem(category);
            removeUserFromScreen(category);

        }

        function removeUserFromScreen(category){
            const parentNode = document.getElementById('listOfUsers');
            const childNodeToBeDeleted = document.getElementById(category);
            if(childNodeToBeDeleted) {
                parentNode.removeChild(childNodeToBeDeleted)
            }
        }