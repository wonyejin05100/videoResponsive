// 모든 article items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

// for문을 이용하여 items의 갯수만큼 반복을 돌면 반복
// for..of : 객체 반복시 사용
// el 은 items인 article의 각각의 요소
for (let el of items) {
    el.addEventListener("mouseenter", e => {
        e.currentTarget.querySelector("video").play();
        // play() 미디어 재생 메서드
        // .currentTarget ->(속성) 현재 이벤트 처리중인 요소 
        // e => 이벤트 핸들러 함수의 매개변수
    });
    el.addEventListener("mouseleave", e => {
        e.currentTarget.querySelector("video").pause();
        // pause() 미디어 정지 메서드
    });

    // article 클릭시 
    el.addEventListener("click", e => {
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h3").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").src = vidSrc;

        aside.querySelector("video").play();
        aside.classList.add("on");
    });
}
// 닫기버튼 클릭시 닫힘
close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});
// aside 클릭시 닫힘
aside.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});



$(function () {
    // 버튼클릭시 검색창 나옴
    $('#searchButton').click(function () {
        $('#searchContainer').toggle(); // toggle - 숨기거나 보여줌
    });
    // 바탕 클릭시 검색창 닫힘
    // html 문서 클릭시,
    // 클릭된 요소를 기준으로 가장 가까운 조상 찾음
    // 찾은 요소 없을시, 
    // 컨테이너 숨김 
    // 그래서, 내부 영역이 아닌 바깥 영역 클릭시 검색창이 숨겨지는 구조가 됨
    $(document).click(function (event) {
        if (!$(event.target).closest('#searchContainer, #searchButton').length) {
            $('#searchContainer').hide();
        }
        // !$ 부정연산자
        // .closest - 조상 요소 탐색
        // .target - 이벤트 발생된 요소 가리킴
    });
});