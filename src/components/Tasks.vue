<template>
    <div class="tasks" >
        <div class="tasks-content" :class="{light: !state, dark: state}">
            <ul >
                <li class="task-l"
                    :class="{light: !state, dark: state}"
                    v-for="task in tasks"
                    :key="task.text"
                >
                    <div :class="{completed: task.completed}">
                        <custom-check
                            class="check-btn"
                            :class="{'completed-icon': !task.completed}"
                            :task="task"
                        />
                        {{ task.text }}
                    </div>
                    <cross-icon
                        class="delete-task"
                        :task="task"
                    />
                </li>
            </ul>
        </div>

        <div class="tasks-footer">
            <ul :class="{light: !state, dark: state}">
                <li>{{ tasksCount }} task{{ Number(tasksCount) === 1 ? '' : 's' }} left</li>
                <li>
                    <ul class="tasks-actions">
                        <li
                            class="tasks-all"
                            @click="filter = undefined"
                            :class="{active: filter === undefined}"
                        >All
                        </li>
                        <li
                            class="tasks-active"
                            @click="filter = false"
                            :class="{active: filter === false}"
                        >Active
                        </li>
                        <li
                            class="tasks-completed"
                            @click="filter = true"
                            :class="{active: filter === true}"
                        >Completed
                        </li>
                    </ul>
                </li>
                <li
                    class="tasks-clear"
                    @click="$store.dispatch('CLEAR_COMPLETED')"
                >Clear Completed
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CrossIcon from "./icons/CrossIcon";
import CustomCheck from "./reusable/CustomCheck";

export default {
    name: "Tasks",
    components: {CustomCheck, CrossIcon},
    computed: {
        tasks() {
            return this.$store.getters.getTasks(this.filter)
        },
        tasksCount() {
            return this.$store.getters.tasksCount
        },
        state() {
            return this.$store.state.theme
        }
    },
    data() {
        return {
            filter: undefined,
        }
    },
}
</script>

<style scoped lang="scss">
.tasks {
    margin-top: 30px;
}

.tasks-content {
    min-height: 76px;
    max-height: 532px;
    overflow-y: scroll;
}

.completed {
    color: hsl(234, 11%, 52%);
    text-decoration: line-through;
}

.delete-task {
    cursor: pointer;
    margin-right: 15px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.5s;
}

.task-l:hover .delete-task {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.5s;
}

.task-l,
.task-l div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-l {
    padding: 0;
    background-color: hsl(235, 24%, 19%);
    border-bottom: 1px solid hsl(233, 14%, 35%);
}

.task-l:last-child {
    border: none;
}

.tasks-footer {
    border-top: 1px solid hsla(230, 13%, 64%, 0.8);
}

.tasks-footer ul li {
    font-size: 16px;
    color: hsla(234, 11%, 52%, 0.6);
    transition: color .2s ease-in-out;
}

.tasks-footer ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 25px 10px 25px;
    border-radius: 0 0 10px 10px;
}

.tasks-actions li:first-child {
    margin-left: 0;
}

.tasks-actions li {
    margin-left: 20px;
}

.tasks-actions li,
.tasks-clear {
    cursor: pointer;
}

.tasks-actions li:hover {
    color: hsl(230, 75%, 65%);
    transition: color .2s ease-in-out;
}

.tasks-clear:hover {
    color: brown;
    transition: color .2s ease-in-out;
}

.tasks-actions .active {
    //font-size: 12000px;
    color: hsl(230, 75%, 65%);
}
</style>