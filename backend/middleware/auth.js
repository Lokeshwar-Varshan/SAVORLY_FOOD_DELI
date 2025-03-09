export default function authMiddleware(req, res, next) {
    console.log("Auth middleware triggered");
    next();
}
