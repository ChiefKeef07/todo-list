<template>
    <div class="pa4">
        <div class="overflow-auto mb4">
            <table class="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                    <tr>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Item</th>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Due Date</th>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Completion Date</th>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Complete / Remove</th>
                    </tr>
                </thead>
                <tbody class="lh-copy" v-if="list.length">
                    <tr v-for="item in list" :key="item.id">
                        <td class="pv3 pr3 bb b--black-20">{{item.name}}</td>
                        <td class="pv3 pr3 bb b--black-20">{{item.due_date}}</td>
                        <td class="pv3 pr3 bb b--black-20">{{item.completion_date || "Not Complete"}}</td>
                        <td class="pv3 pr3 bb b--black-20">
                            <button class="pl2 pr2 green" type="button" @click="completeItem(item.id)"><font-awesome-icon icon="check"></font-awesome-icon></button>
                            <button class="pl2 pr2 red" type="button" @click="removeItem(item.id)"><font-awesome-icon icon="times"></font-awesome-icon></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="!list.length" class="flex justify-center pt4">
                <span>No To-Do's in the List</span>
            </div>
        </div>
        <div class="flex justify-center">
            <AddEditToDo @add="addItemToList($event)"/>
        </div>
    </div>
</template>

<script>
import AddEditToDo from './AddEditToDo.vue'

export default {
    name: 'ToDoList',
    components: {
        AddEditToDo,
    },
    props: {
        
    },
    data() {
        return {
            list: [],
            maxID: 1,
        }
    },
    created() {
        this.list = [
            {
                "id": 1,
                "name": 'Do the Dishes',
                "due_date": '07/22/2019',
                "completion_date": null,
            },
        ];

        this.getMaxID();
    },
    methods: {
        addItemToList(item) {
            this.getMaxID();
            this.maxID++;
            item.id = this.maxID;
            this.list.push(item);
        },
        completeItem(id) {
            this.list.forEach(function(listItem){
                if (listItem.id === id) {
                    var date = new Date();
                    listItem.completion_date = date.toDateString();
                }
            });
        },
        removeItem(id) {
            this.list = this.list.filter(function(listItem){
                return listItem.id !== id;
            });
        },
        getMaxID() {
            var max = this.maxID;
            this.list.forEach(function(listItem){
                max = max > listItem.id ? max : listItem.id;
            });
            this.maxID = max;
        },
    }
}
</script>