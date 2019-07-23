<template>
    <div class="ba br3 pb4 shadow-2 w-60">
        <span><h4>Add New To-Do Item</h4></span>
        <div class="flex flex-wrap justify-center mt3">
            <div class="flex items-center">
                <label for="item">Item Name</label>
                <input class="ml2" type="text" id="name" v-model="newItem.name"/>
            </div>
            <div class="flex items-center ml4">
                <label for="due_date">Due Date</label>
                <input class="ml2" type="text" id="due_date" v-model="newItem.due_date"/>
            </div>
            <div class="flex items-center ml4">
                <button class="pl2 pr2 green" type="button" @click="addItem"><font-awesome-icon icon="check"></font-awesome-icon></button>
                <button class="pl2 pr2 red" type="button" @click="clearItem"><font-awesome-icon icon="times"></font-awesome-icon></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddEditToDo',
    props: {
        item: {
            'id': 0,
            'name': '',
            'due_date': '',
            'completion_date': '',
        }
    },
    data() {
        return {
            newItem: {
                'id': 0,
                'name': '',
                'due_date': '',
                'completion_date': '',
            }
        }
    },
    created() {
        if (this.item && this.item.id) {
            this.newItem = this.item;
        }
    },
    methods: {
        addItem() {
            this.$emit('add', this.newItem);
            this.clearItem();
        },
        clearItem() {
            this.newItem = {
                'id': 0,
                'name': '',
                'due_date': '',
                'completion_date': '',
            }
        },
    }
}
</script>