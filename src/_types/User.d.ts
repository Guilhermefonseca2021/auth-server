type User = {
    id: String;
    email: String;
    password: String;
    refreshTokens?: string[];
    createdAt: Date;
    updatedAt: Date;
}