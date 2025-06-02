interface IAuthStore {
    token: string;
}
const defaultValue: { user: IAuthStore } = {
    user: {
        token: "",
    },
};

export const useAuthStore = defineStore("auth", {
    state: () => defaultValue,
    getters: {
        isAuth: (state) => !!state.user.token,
        token: (state) => state.user.token,
    },
    actions: {
        clear() {
            this.$patch(defaultValue);
        },
        set(input: IAuthStore) {
            this.$patch({ user: input });
        },
    },
});
