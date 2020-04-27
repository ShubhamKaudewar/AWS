const crslNextBtn = document.querySelector('.crsl-next');
        const crslPrevBtn = document.querySelector('.crsl-prev');
        const crslAllImgs = document.querySelector('.crsl-all-img-ctn');
        const crslImgs = document.querySelectorAll('.crsl-img');
        const crslImgsLength = 3;
        var nextCount = 0;

        crslImgs[nextCount+1].style.transform = "scale(1.2)";

        function crslPrevImg() {
            nextCount -= 1;
            if (nextCount < -1) {
                nextCount = crslImgsLength - 2;
            }
            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) crslImgs[nextCount + 2].style.transform = "scale(1)";
        }
        function crslNextImg() {
            nextCount += 1;
            if (nextCount > crslImgsLength - 2) {
                nextCount = -1;
            }

            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) crslImgs[nextCount + 2].style.transform = "scale(1)";
        }
        crslPrevBtn.addEventListener('click', crslPrevImg);
        crslNextBtn.addEventListener('click', crslNextImg);