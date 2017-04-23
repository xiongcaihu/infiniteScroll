new Vue({
    el: ".infiniteScroll",
    data: {
        startIndex: 0,
        showItemCount: 10,
        list: (function () {
            let array = [];
            for (let i = 0; i < 100; i++) {
                array.push({
                    name: i
                })
            }

            return array;
        })()
    },
    computed: {
        nowList() {
            return this.list.slice(this.startIndex, this.endIndex);
        },
        endIndex() {
            return this.startIndex + this.showItemCount;
        },
        itemBoxsStyle() {
            return {
                top: 67 * (this.startIndex) + 'px'
            }
        },
        braceBlockStyle() {
            return {
                height: 67 * (this.list.length) + 'px'
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            let vm = this;
            $(this.$el).scroll(function (e) {
                let container = $(this);
                let nowStartIndex = parseInt(container.scrollTop() / 67);
                vm.startIndex = nowStartIndex;
                if (container.scrollTop() >= container.prop('scrollHeight') - container.height()) {
                    // 加载
                    setTimeout(function () {
                        for (let i = vm.list.length, max = i + 10; i < max; i++) {
                            vm.list.push({
                                name: i
                            })
                        }
                    }, 300);
                }
            })
        })
    }
})