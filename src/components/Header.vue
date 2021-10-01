<template>
    <div class="header">
        <div class="header-h">
            <h1>Todo</h1>
            <div
                class="icon"
                v-if="state"
                @click="$store.dispatch('CHANGE_THEME', state)"
            >
                <sun-icon />
            </div>
            <div
                class="icon"
                v-if="!state"
                @click="$store.dispatch('CHANGE_THEME', state)"
            >
                <moon-icon />
            </div>
        </div>
        <div
            class="create-task"
            :class="{light: !this.state, dark: this.state}"
        >
            <input
                :class="{light: !state, dark: state}"
                type="text"
                placeholder="Create a new task..."
                v-model="task.text"
                @keyup.enter="addTask"
            >
        </div>
    </div>
</template>

<script>
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

export default {
    name: "Header",
    components: {SunIcon, MoonIcon },
    data() {
        return {
            task: {text: '', completed: false},
        }
    },
    computed: {
        state() {
            return this.$store.state.theme
        }
    },
    methods: {
        addTask() {
            if (this.task.text) {
                this.$store.dispatch('ADD_TASK', this.task)
                this.task = {text: '', completed: false}
            }
        },
    },
}
</script>

<style lang="scss">
.icon {
    cursor: pointer;
}

input::placeholder {
    font-style: italic;
    font-weight: 300;
    opacity: 0.25;
}

.header-h {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    margin-bottom: 30px;
}

.create-task {
    padding-left: 25px;
    display: flex;
    align-items: center;
    text-align: center;
}

</style>