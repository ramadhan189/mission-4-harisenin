

	

const addTask = document.getElementById("section-2");
const add = document.getElementById("add");
add.addEventListener("click", (e) => {
    addTask.style.display = "block";
})

const deleteAll = document.getElementById("Delete");
deleteAll.addEventListener('click', function(){
const doubleCheck = confirm("are you sure to delete all your task?")
    if(doubleCheck == true && yourForm.innerHTML.trim() === ''){
        alert('you have no assignment')
        console.log(1)
        return;
    } else if (doubleCheck == true){
        console.log(2)
        yourForm.innerHTML = '';
        done.innerHTML = '';
    }  else{
        console.log(3)
        return;
    }
})


const yourForm = document.getElementById('your-form');
const submit = document.getElementById('submit');
let count = 1;
submit.addEventListener('click', function(e){
    e.preventDefault()

    let input = document.getElementById('input').value.trim();
    let option = document.getElementById('select').value;
    const waktu = new Date()
    const time = waktu.toLocaleString('id-ID',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
    });
   // jika inputan kosong
    if(!input) {
        alert('input cannot be empty');
        return
    };
    // membuat container
    const container = document.createElement('div');
    container.className = 'container';
    container.classList.add('p-2', 'bg-gray-200', 'border-solid', 'border-y-2', 'border-gray-400', 'text-xl', 'font-semibold', 'relative', 'flex', 'flex-row');
    
    // membuat checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task${count++}`;
    
    //membuat isi input
    const spanInput = document.createElement('span');
    spanInput.textContent = `${input}`;
    spanInput.classList.add('capitalize')
    
    //membuat isi opsi di html di dalan label
    const spanSelect = document.createElement('span');
    spanSelect.textContent = `${option}`
    spanSelect.classList.add('ml-4')
     if(option == 'HIGH') {
         spanSelect.classList.add('text-red-500', 'text-xs')
         spanSelect.setAttribute('value', 'HIGH')
     } else if(option == 'MEDIUM') {
         spanSelect.classList.add('text-yellow-500', 'text-xs')
         spanSelect.setAttribute('value', 'MEDIUM')
     } else if(option == 'LOW') {
         spanSelect.classList.add('text-green-500', 'text-xs')
         spanSelect.setAttribute('value', 'LOW')
     } else if (option == '') {
       alert('prioty cannot be empty')
       return;  
     };

     //membuat waktu di html di dalam label
     const spanTime = document.createElement('span');
     spanTime.textContent = `${time}`;
     spanTime.classList.add('opacity-50', 'text-xs', 'font-semibold', 'ml-6');

     //membuat tanggal date line
     const deadLine = document.getElementById('inputDate').value;
     const spanDeadLine = document.createElement('span');

     spanDeadLine.textContent = `deadline: ${deadLine}`
     spanDeadLine.classList.add('opacity-50', 'text-xs', 'font-semibold', 'ml-6');
     if (deadLine == ''){
        alert('put your deadline first')
        return;
     } else if (deadLine < (deadLine.min = new Date().toISOString().split("T")[0] + 1)){
        alert('do not give a date lower than the current date')
        return;
     }
     
     //membuat tombol delete
     const spanDelete = document.createElement('span');
     spanDelete.textContent = 'x';
     spanDelete.classList.add('absolute', 'right-4', 'cursor-pointer');
     spanDelete.addEventListener('click', function(){
        container.remove();
     });

     //membuat label
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;

    const done = document.getElementById('done');
     
    // membuat cek list
     checkbox.addEventListener('change', function(){
        if(checkbox.checked) {
            done.appendChild(container)
            container.classList.add('opacity-75');
            spanInput.classList.add('line-through', 'text-gray-500');
            spanSelect.classList.add('text-gray-500');
            spanTime.classList.add('text-gray-500');
            spanDeadLine.classList.add('text-gray-500');
         }
         else {
            yourForm.appendChild(container)
            container.classList.remove('opacity-75');
            spanInput.classList.remove('line-through', 'text-gray-500');
            spanSelect.classList.remove('text-gray-500');
            spanTime.classList.remove('text-gray-500');
            spanDeadLine.classList.remove('text-gray-500');

        }
    })

    label.appendChild(spanInput);
    label.appendChild(spanSelect);
    label.appendChild(spanTime);
    label.appendChild(spanDeadLine);
    label.appendChild(spanDelete);
    container.appendChild(checkbox);
    container.appendChild(label);
    yourForm.appendChild(container);

    addTask.style.display = 'none';
})

input.value = '';
