const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ msg: "There was an error!" })
};

export default errorHandler;