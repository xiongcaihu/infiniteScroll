> # 无限下拉滚动的思路（非组件）

> ### use vue2.0 + jquery
```
<div class="infiniteScroll">   <!--容器-->
    <div class="itemBoxs" :style="itemBoxsStyle">     <!--呈现内容的容器，position:absolute， top 随着滚动的位置变动-->
        <div class="item" v-for="(item,index) in nowList" :key="index">{{item.name}}</div>
    </div>
    <div class="braceBlock" :style="braceBlockStyle"></div>    <!--始终为所有item的高度总和-->
</div>
```
<br>
<br>

<img src="https://github.com/xiongcaihu/infiniteScroll/blob/master/infiniteScroll.gif">
