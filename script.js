const buttons = document.querySelectorAll('.question');


buttons.forEach(button => {
    // const icon = accordian.querySelector('.icon');
    // const answer = accordian.querySelector('.answer');

    
    // console.log(button.getHTML);

    button.addEventListener('click' , ()=>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');
        
        // if(icon.classList.contains('active')){
        //     icon.classList.remove('active');
        //     answer.style.maxHeight = null;
        // } else {
        //     icon.classList.add('active');
        //     answer.style.maxHeight = answer.scrollHeight + 'px';
        // }

        // this.classList.toggle("active");

        // this.classList.toggle("active");
        

        const answer = button.nextElementSibling;
        // console.log(answer);
        const plusIcons = button.querySelector(".plus-icon");
        const minusIcons = button.querySelector(".minus-icon");

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            plusIcons.style.display = "block";
            minusIcons.style.display = "none";
        }else{
            answer.style.maxHeight = answer.scrollHeight + 'px';
            plusIcons.style.display = 'none';
            minusIcons.style.display = 'block';
        }
        // const plusIcons = this.querySelector(".plus-icon");
        // const minusIcons = this.querySelector(".minus-icon");

        // if(descriptions.style.maxHeight){
        //     descriptions.style.maxHeight = null;
        //     plusIcons.style.display = "block";
        //     minusIcons.style.display = "none";
        // }else{
        //     descriptions.style.maxHeight = descriptions.scrollHeight + 'px';
        //     plusIcons.style.display = 'none';
        //     minusIcons.style.display = 'block';
        // }


    });
})