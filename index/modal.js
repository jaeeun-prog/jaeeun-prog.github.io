// 1. 프로젝트 데이터 정리
const projectData = {
    'p1': { img: 'project/p1.jpg' }, 
    'p2': { img: 'project/p2.jpg' },
    'p3': { img: 'project/p3.jpg' }, 
    'p4': { img: 'project/p4.jpg' },
    'p5': { img: 'project/p5.jpg' }, 
    'p6': { img: 'project/p6.jpg' },
    
    'w1': { 
        img: 'project/yxnn2.jpg', 
        title: 'Jewelry Shopping Mall', 
        period: '2026. 02. 20',
        type: 'Cafe24 / Responsive Web',
        output: 'Photoshop, Illustrator',
        overview: '여기에 프로젝트 상세 설명을 적으세요. (예: 최소한의 루틴으로 브랜드의 가치를 담아보았습니다.)',
        linkPdf: 'project/yxnn.pdf',
        linkWeb: 'https://yyob854.cafe24.com/skin-skin1'
    },
    'w2': { 
        img: 'project/home1.jpg', 
        title: 'Website Redesign', 
        period: '2026. 04. 01',
        type: 'PC Web Publishing',
        output: 'Illustrator, Photoshop, HTML, CSS',
        overview: '여기에 두 번째 프로젝트 상세 설명을 적으세요.',
        linkPdf: 'project/home_1.pdf',
        linkWeb: 'https://jaeeun-prog.GitHub.io/home/index.html'
    }
};

// 2. 모달 열기 함수
function openModal(id) {
    const data = projectData[id];
    
    if (id.startsWith('w')) {
        document.getElementById('web-img').src = data.img;
        document.getElementById('web-title').innerText = data.title;
        
        // 정보 출력 (콜론 제외 및 정렬 구조)
        document.getElementById('web-info').innerHTML = `
            <p><b class="info-label">Period</b> <span>${data.period}</span></p>
            <p><b class="info-label">Type</b> <span>${data.type}</span></p>
            <p><b class="info-label">Output</b> <span>${data.output}</span></p>
            <p><b class="info-label" style="display:block; margin-bottom:10px;">OVERVIEW</b></p>
            <p style="padding-left: 5px;">${data.overview}</p>
        `;
        
        // 🔴 버튼 영역: 새 탭 열기(target="_blank")와 보안 속성 추가
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

// 3. 모달 닫기 함수
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 4. 모달 바깥쪽 클릭 시 닫기
function closeModalOutside(e, modalId) {
    if (e.target.id === modalId) closeModal(modalId);
}

// 5. 스크롤 애니메이션 & 초기화
const revealSection = () => {
    const aboutSection = document.querySelector('#about');
    if(!aboutSection) return; 
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 150) {
        aboutSection.classList.add('reveal');
    }
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    setTimeout(function() {
        scrollTo(0, 0);
    }, 10);
};