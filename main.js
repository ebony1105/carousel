let $buttons = $('#buttonWrapper > button');
let $slides = $('#slides');
let $images = $slides.children('img')

let current = 0;

makeFakeSlides()
$slides.css({
    transform: 'translateX(-300px)'
})
bindEvents()



function bindEvents() {
    $buttons.eq(0).on('click', function() {
        if (current === 3) {
            console.log('你是从最后一张到第一张的')
            $slides.css({
                transform: 'translateX(-1500px)'
            }).one('transitionend', function() {
                $slides.hide().offset()
                $slides.css({
                    transform: 'translateX(-300px)'
                })
                $slides.show()
            })
        } else {
            $slides.css({
                transform: 'translateX(-300px)'
            });
        }
        current = 0;
    });

    $buttons.eq(1).on('click', function() {
        $slides.css({
            transform: 'translateX(-600px)'
        })
        current = 1;
    });


    $buttons.eq(2).on('click', function() {
        $slides.css({
            transform: 'translateX(-900px)'
        })
        current = 2;
    });

    $buttons.eq(3).on('click', function() {
        if (current === 0) {
            console.log('你是从最后一张到第一张的')
            $slides.css({
                transform: 'translateX(0px)'
            }).one('transitionend', function() {
                $slides.hide().offset()
                $slides.css({
                    transform: 'translateX(-1200px)'
                })
                $slides.show()
            })
        } else {
            $slides.css({
                transform: 'translateX(-1200px)'
            })
        }

        current = 3;
    });
}






function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true); //包括里面的子元素都会一起克隆
    //console.log($firstCoay[0].outerHTML);
    let $lastCopy = $images.eq($images.length - 1).clone(true);
    //console.log($lastCoay[0].outerHTML);//outerHTML会把这个元素直接打印出来
    $slides.append($firstCopy); //把第一张图片放到最后面
    $slides.prepend($lastCopy); //把最后一张图片放到最前面
}