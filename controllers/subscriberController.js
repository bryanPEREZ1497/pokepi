const BookModel = require('../models/bookModel');
const SubscriberModel = require('../models/subscriberModel');

const subscriberController = {};

subscriberController.index = async function (req, res, next) {
    try {
        res.json({
            message: 'Success',
            data: await SubscriberModel
                .find({})
                .populate('books', 'title -_id')
                .select('name subscribedToChannel books'),
        });
    } catch (error) {
        next(error);
    }
};


subscriberController.searchByName = async function (req, res) {
    const data = await SubscriberModel
        .find({ name: { $regex: req.query.name, $options: 'i' } })
        .select('name subscribedToChannel');

    res.json({
        message: 'Success',
        data: data,
    });
}

subscriberController.show = async function (req, res) {
    try {
        const subscriber = await SubscriberModel.findOne(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
        res.status(201).json({
            message: 'Subscriber found successfully',
            data: subscriber
        })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

subscriberController.store = async function (req, res) {
    // const books = await BookModel.find({ subscriber: subscriber._id });
    // return res.send(books);

    try {
        // const newSubscriber = await subscriber.save();
        // console.log(newSubscriber);
        const subscriber = await new SubscriberModel({
            name: req.body.name,
            subscribedToChannel: req.body.subscribedToChannel,
            // books: req.body.books
        }).save();

        const book = await new BookModel({
            title: req.body.title,
            subscriber: subscriber._id
        }).save();

        subscriber.books.push(book);
        await subscriber.save();

        res.status(201).json({
            message: 'Subscriber created successfully',
            data: subscriber
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

subscriberController.update = async function (req, res) {
    let subscriber
    try {
        subscriber = await SubscriberModel.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    if (req.body.name != null) {
        subscriber.name = req.body.name
    }

    if (req.body.subscribedToChannel != null) {
        subscriber.subscribedToChannel = req.body.subscribedToChannel
    }

    try {
        const updatedSubscriber = await subscriber.save();
        res.json({
            message: 'Subscriber updated successfully',
            data: updatedSubscriber
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

subscriberController.destroy = async function (req, res) {
    let subscriber
    try {
        subscriber = await SubscriberModel.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    try {
        await subscriber.remove();
        res.json({
            message: 'Deleted Subscriber',
            data: subscriber
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}

subscriberController.destroyMany = async function (req, res) {
    res.send('d');
}

module.exports = subscriberController;