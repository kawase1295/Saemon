        //キャンバス
        const can = document.getElementById('can');
        const ctx = can.getContext('2d');
        //初期色
        let inputRightColor = '#235694';
        function main(name,age) {
            //カラーピッカーの色を反映
            `${name}`.addEventListener('change', ()=> {
                `${age}` = document.getElementById(`${name}`).value;
            });

            //図形描画
            ctx.fillStyle = `${age}`;
            ctx.fillRect(115, 0, 185, 300);
		}

		main(rightColor,inputRightColor);
        //ループ
        setInterval(main, 1000 / 60);


