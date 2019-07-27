<template>
    <div class="ba br3 pb4 shadow-2 pl3 pr3">
        <span><h4>Add New To-Do Item</h4></span>
        <div class="flex flex-wrap justify-center mt3">
            <div class="flex items-center">
                <label for="item">Item Name</label>
                <input class="ml2 br3 h2 pl2" type="text" id="name" v-model="newItem.name"/>
            </div>
            <div class="flex items-center ml4">
                <label for="due_date">Due Date</label>
                <vue-pikaday 
                    class="ml2 br3 h2 pl2" 
                    type="text" 
                    id="due_date"
                    :options="dateOptions"
                    placeholder="Select a Date"
                    v-model="newItem.due_date"
                />
            </div>
            <div class="flex items-center ml4">
                <button class="pl2 pr2 green" type="button" @click="addItem"><font-awesome-icon icon="check"></font-awesome-icon></button>
                <button class="pl2 pr2 red" type="button" @click="clearItem"><font-awesome-icon icon="times"></font-awesome-icon></button>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
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
            },
            dateOptions: {
                format: "MM/DD/YYYY",
                minDate: moment().toDate()
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
            this.newItem.due_date = this.newItem.due_date ? moment(this.newItem.due_date).format("MM/DD/YYYY") : "No Due Date";
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