const techStackCategoryBtnArr = document.querySelectorAll('.tech-stack-category-btn');
const techStackCategorySelectedArr = document.querySelectorAll('.tech-stack-category-selected');
const techStackContentWrapArr = document.querySelectorAll('.tech-stack-content-wrap');

techStackCategoryBtnArr.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('on')) return;

        techStackCategoryBtnArr.forEach((el) => {
            if (el.classList.contains('on')) {
                el.classList.remove('on');
                el.classList.add('text-gray-400');
                el.classList.add('hover:text-gray-950');
            }
        });
        el.classList.add('on');
        el.classList.remove('text-gray-400');
        el.classList.remove('hover:text-gray-950');


        techStackCategorySelectedArr.forEach((el) => {
            el.classList.remove('on');
            el.classList.add('hidden');
        });
        techStackCategorySelectedArr[index].classList.add('on');
        techStackCategorySelectedArr[index].classList.remove('hidden');


        techStackContentWrapArr.forEach((el) => {
            el.classList.remove('on');
            el.classList.add('hidden');
        });
        techStackContentWrapArr[index].classList.remove('hidden');
    });
});





// // Utility functions
// const toggleClass = (element, addClasses = [], removeClasses = []) => {
//     removeClasses.forEach(cls => element.classList.remove(cls));
//     addClasses.forEach(cls => element.classList.add(cls));
// };

// const updateActiveState = (elements, index, activeClasses = [], inactiveClasses = []) => {
//     elements.forEach((el, idx) => {
//         if (idx === index) {
//             toggleClass(el, activeClasses, inactiveClasses);
//         } else {
//             toggleClass(el, inactiveClasses, activeClasses);
//         }
//     });
// };

// // DOM elements
// const techStackCategoryBtnArr = document.querySelectorAll('.tech-stack-category-btn');
// const techStackCategorySelectedArr = document.querySelectorAll('.tech-stack-category-selected');
// const techStackContentWrapArr = document.querySelectorAll('.tech-stack-content-wrap');

// // Event listener
// techStackCategoryBtnArr.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         if (button.classList.contains('on')) return;

//         // Update button states
//         updateActiveState(
//             techStackCategoryBtnArr,
//             index,
//             ['on'],
//             ['text-gray-400', 'hover:text-gray-950']
//         );

//         // Update selected categories
//         updateActiveState(
//             techStackCategorySelectedArr,
//             index,
//             ['on'],
//             ['hidden']
//         );

//         // Update content wrap visibility
//         updateActiveState(
//             techStackContentWrapArr,
//             index,
//             [],
//             ['hidden']
//         );

//         console.log(index);
//     });
// });
