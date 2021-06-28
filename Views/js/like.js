///////////////////////////////////////
// いいね！用のJavaScript
///////////////////////////////////////
 
$(function () {    //$()に続けてfunction()でJQueryの書式でhtmlをロードしてから実行する
  // いいね！がクリックされたとき
  $('.js-like').click(function () {  //is-likeクラスの要素をクリックしたら実行する関数
      const this_obj = $(this);   //thisにはクリックされた要素の情報がobjectとして入っている
      const like_id = $(this).data('like-id');    //クリック要素からlike-idを取得
      const like_count_obj = $(this).parent().find('.js-like-count');   //クリック要素内にあるjs-like-countクラスの要素を取得
      let like_count = Number(like_count_obj.html());   //js-like-countクラスの要素からいいね数を取得

      if (like_id) {    //like_idがあったらすでにいいねしてあるということ
          // いいね！取り消し
          // いいね！カウントを減らす
          like_count--;
          like_count_obj.html(like_count);
          this_obj.data('like-id', null);

          // いいね！ボタンの色をグレーに変更
          $(this).find('img').attr('src', '../Views/img/icon-heart.svg');
      } else {
          // いいね！付与
          // いいね！カウントを増やす
          like_count++;
          like_count_obj.html(like_count);
          this_obj.data('like-id', true);

          // いいね！ボタンの色を青に変更
          $(this).find('img').attr('src', '../Views/img/icon-heart-twitterblue.svg');
      }
  })
})