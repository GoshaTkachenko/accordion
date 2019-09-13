(function (){
    let heads = document.querySelectorAll('.head');

    [...heads].forEach(
        head => head.addEventListener('click',
            () => head.classList.toggle('active')
        )
    );

})();


// let heads = document.querySelectorAll('.head');
// for (let i = 0; i < heads.length; i++) {
//     heads[i].addEventListener('click',
//         () => heads[i].classList.toggle('active')
//     );
// }
