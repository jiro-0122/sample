'use strict';
{

    class Container{
        constructor(){

            const section = document.createElement('section');
            section.classList.add('container_under-box')

            const div = document.createElement('div');

            this.h2 = document.createElement('h2')

            this.box = document.createElement('div');
            this.box.classList.add('box');

            this.p = document.createElement('p');
            this.p.textContent = this.getRandomText();

            this.stop = document.createElement('div');
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop');

            // stopのクリックイベント
            this.stop.addEventListener('click', ()=>{
                if (this.stop.classList.contains('inactive')){
                    return;
                }
                this.stop.classList.add('inactive');
                
                clearTimeout(this.timeoutId);
                left --;

                if(left===0){
                    left=3;
                    spin.classList.remove('inactive');
                }
            })

        //  <section class="container_under-box">
        //   <div class>
        //     <h2></h2>
        //     <div class="box">
        //       <p></p>
        //       <p></p>
        //       <p></p>
        //     </div>
        //   </div>
        //   <div class="stop"></div>
        // </section>
            
            div.appendChild(this.h2);
            div.appendChild(this.box);

            section.appendChild(div);
            
            this.box.appendChild(this.p)

            section.appendChild(this.stop);

            const container = document.querySelector('.container');
            container.appendChild(section); 
        }


        // spinメソッド
        spin(){
            this.p.textContent = this.getRandomText();
            this.timeoutId = setTimeout(()=>{
                this.spin();
            }, 50);
        }

    }

    class DoraContainer extends Container {
        constructor() {
            super();
            this.h2.textContent = 'ドラ';
        }

        getRandomText(){
            const texts = [
                'ドラ2枚',
                '赤ドラ8枚',
                'アリス',
            ];
            return texts[Math.floor(Math.random() * texts.length)];
        };
    }

    class YakuContainer extends Container {
        constructor() {
            super();
            this.h2.textContent = '追加役';
        }
        getRandomText(){
            const texts = [
                'オープンリーチ',
                'マネマン',
                '三同刻',
            ];
            return texts[Math.floor(Math.random() * texts.length)];
        };
    }

    class ShibariContainer extends Container {
        constructor() {
            super();
            this.h2.textContent = '縛り';
        }
        getRandomText(){
            const texts = [
                '二ハン縛り',
                'ナシナシ',
                '焼き鳥戻し',
            ];
            return texts[Math.floor(Math.random() * texts.length)];
        };
    }

    const containers = [
        new DoraContainer(),
        new YakuContainer(),
        new ShibariContainer(),

    ];

    let left = 3;

    // spinのクリックイベント
    const spin = document.getElementById('spin');
    spin.addEventListener('click', ()=>{
        if (spin.classList.contains('inactive')){
            return;
        }
        spin.classList.add('inactive');

        containers.forEach(container =>{
            container.spin();
            container.stop.classList.remove('inactive');
        });

    });





}
