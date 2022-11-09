
        const sideBar = document.getElementById('side_nav'),
              sideBtn = document.getElementById('sidebtn'),
              sideimg = document.querySelector('.sideimg')

        sideBtn.addEventListener('click', opensidebar);

        function opensidebar(){
            // e.preventDefault();
            console.log('this is a click event listener');
            if (sideBar.style.display === 'none') { 
                sideBar.style.display = 'block'
                sideimg.style.display = 'none'
            } else {
                sideBar.style.display = 'none'
                sideimg.style.display = 'block'
            }
        }
