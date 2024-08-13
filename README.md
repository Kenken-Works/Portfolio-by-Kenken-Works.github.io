
### ポートフォリオ作成

公開方法：
https://kenken-works.github.io/Portfolio-by-Kenken-Works.github.io/#about
にてウェブページで公開する

テトリス
https://github.com/Kenken-Works/Portfolio-by-Kenken-Works.github.io/blob/Portfolio_01/Tetris%20Game%20Final%20HTML%20File.html

→自宅のLinux_Ubuntuサーバーからアクセスできるように将来的に可用性、冗長性を広げる

→公開した内容を印刷して　用紙でも見れるようにする。


## スケジュール



8月7日　一度見せる
8月16日　再提出

## 内容


・1:　WEBサーバーを起動して、遠隔でjava script版テトリスを操作する

・2:　リポジトリ名: linux-infrastructure-setup
　　　このリポジトリは、Linuxサーバーの構築、保守、運用に関する詳細なドキュメント、
スクリプト、および設定ファイルを提供し、エンジニアが効率的にシステムを管理できるよう支援することを目的としています。特に、logwatchによるログ管理、Elastic Stackの設定、基礎的なセキュリティ強化に重点を当てています。

## 努力した部分　（小学生でもわかるレベルで）

たくさんデータがあるので、表示される文字のフィルター設定を見直し、必要な情報のみをレポートに含めるようにした。

説明: 公開鍵認証の設定がうまく機能しない。
対策: 公開鍵の配置場所やsshd_configの設定を再確認し、適切に設定されていることを確認する。
Kibanaのダッシュボード設定

説明: Kibanaのダッシュボードが正しく表示されない。
対策: Kibanaの設定ファイルとブラウザのコンソールログを確認し、エラーの原因を特定する。
Fail2banのIPブロック



出来なかった部分

・わかりやすい検知した内容のメッセージ設定
・実際に不正ログインされた時の挙動の検証
・監視対象の明確化tetorisu.jpg


##　画像仮データ
kibana_image01.png
Rename 20190203140435.png 
kibana_image01.png
