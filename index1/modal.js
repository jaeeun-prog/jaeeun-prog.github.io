const projectData = {
    'p1': { img: 'img/p1.jpg' }, 'p2': { img: 'img/p2.jpg' }, 'p3': { img: 'img/p3.jpg' },
    'p4': { img: 'img/p4.jpg' }, 'p5': { img: 'img/p5.jpg' }, 'p6': { img: 'img/p6.jpg' },
    'w1': { 
        img: 'img/yxnn.jpg', title: 'Jewelry Shopping Mall', period: '2026. 02. 20',
        type: 'Cafe24 / Responsive Web', output: 'Photoshop, Illustrator',
        overview: '화이트 톤의 미니멀한 레이아웃으로 주얼리 본연의 광택과 고급스러운 디테일을 강조했습니다.',
        linkPdf: 'img/yxnn.pdf', linkWeb: 'https://yyob854.cafe24.com/skin-skin1'
    },
    'w2': { 
        img: 'img/home.jpg', title: 'Website Redesign', period: '2026. 04. 01',
        type: 'PC Web Publishing', output: 'Illustrator, Photoshop, HTML, CSS',
        overview: '신선한 식재료의 이미지를 부각하기 위해 정돈된 그리드와 깨끗한 컬러 시스템을 적용했습니다.',
        linkPdf: 'img/home_1.pdf', linkWeb: 'https://jaeeun-prog.GitHub.io/home/index.html'
    }
};

function openModal(id) {
    const data = projectData[id];
    if (id.startsWith('w')) {
        document.getElementById('web-img').src = data.img;
        document.getElementById('web-title').innerText = data.title;
        document.getElementById('web-info').innerHTML = `
            <p><b class="info-label">Period</b> <span>${data.period}</span></p>
            <p><b class="info-label">Type</b> <span>${data.type}</span></p>
            <p><b class="info-label">Output</b> <span>${data.output}</span></p>
            <p><b class="info-label">Overview</b> <span class="overview-text">${data.overview}</span></p>
        `;
        document.getElementById('web-btns').innerHTML = `
            <a href="${data.linkPdf}" target="_blank" rel="noopener noreferrer" class="modal-btn">기획서 보기</a>
            <a href="${data.linkWeb}" target="_blank" rel="noopener noreferrer" class="modal-btn">Web site View</a>
        `;
        document.getElementById('modal1').style.display = 'flex';
    } else {
        document.getElementById('design-img').src = data.img;
        document.getElementById('modal').style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalOutside(e, modalId) { 
    if (e.target.id === modalId) closeModal(modalId); 
}

const revealSection = () => {
    document.querySelectorAll('section').forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) sec.classList.add('reveal');
    });
};

window.addEventListener('scroll', revealSection);

window.addEventListener('load', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
        window.scrollTo(0, 0);
        revealSection();
    }, 10);
});