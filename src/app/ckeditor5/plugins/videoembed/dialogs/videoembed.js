CKEDITOR.dialog.add('videoembedDialog', function (editor) {
    return {
        title: 'Insert Video',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: "tab-basic",
                label: 'Basic Settings',
                accessKey: "I",
                elements: [
                    {
                        type: "vbox", padding: 0,
                        children: [
                            {
                                id: "src",
                                type: "text",
                                label: 'Video URL (YouTube, Instagram or Twitter)',
                                required: !0,
                                validate: CKEDITOR.dialog.validate.notEmpty("Please provide Video URL.")
                            }
                        ]
                    }/*,
                    {
                        type: "hbox",
                        children: [
                            {
                                id: "width",
                                type: "text",
                                style: "width:100%",
                                labelLayout: "vertical",
                                required: !0,
                                default: 612,
                                label: 'Width',
                                validate: function () {
                                    let value = this.getValue();
                                    if (!value) {
                                        return 'Pls provide Width in Numbers & Cannot be empty'
                                    }
                                    let isInteger = (CKEDITOR.dialog.validate.integer("Please provide Valid Number in Width.")(value));
                                    if (isInteger !== true) {
                                        return isInteger;
                                    }
                                }
                            },
                            {
                                id: "height",
                                type: "text",
                                required: !0,
                                style: "width:100%",
                                default: 360,
                                labelLayout: "vertical",
                                label: 'Height',
                                validate: function () {
                                    let value = this.getValue();
                                    if (!value) {
                                        return 'Pls provide Height in Numbers & Cannot be empty'
                                    }
                                    let isInteger = (CKEDITOR.dialog.validate.integer("Please provide Valid Number in Height.")(value));
                                    if (isInteger !== true) {
                                        return isInteger;
                                    }
                                }
                            }
                        ],
                    },
                    {
                        type: "hbox",
                        widths: ["50%", "50%"],
                        children: [
                            { id: "scrolling", type: "checkbox", label: 'Scrolling' },
                            { id: "frameborder", type: "checkbox", label: 'FrameBorder' },
                        ],
                    }*/
                ],
            }
        ],
        onOk: function () {
            var providers = [
                {
                    name: 'dailymotion',
                    url: /^dailymotion\.com\/video\/(\w+)/,
                    html: match => {
                        const id = match[1];

                        return (
                            '<div style="position: relative; padding-bottom: 100%; height: 0; ">' +
                            `<iframe src="https://www.dailymotion.com/embed/video/${id}" ` +
                            'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                            'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
                            '</iframe>' +
                            '</div>'
                        );
                    }
                },

                {
                    name: 'spotify',
                    url: [
                        /^open\.spotify\.com\/(artist\/\w+)/,
                        /^open\.spotify\.com\/(album\/\w+)/,
                        /^open\.spotify\.com\/(track\/\w+)/
                    ],
                    html: match => {
                        const id = match[1];

                        return (
                            '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' +
                            `<iframe src="https://open.spotify.com/embed/${id}" ` +
                            'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                            'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
                            '</iframe>' +
                            '</div>'
                        );
                    }
                },

                {
                    name: 'youtube',
                    url: [
                        /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
                        /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
                        /^youtube\.com\/embed\/([\w-]+)/,
                        /^youtu\.be\/([\w-]+)/
                    ],
                    html: match => {
                        const id = match[1];

                        return (
                            '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
                            `<iframe src="https://www.youtube.com/embed/${id}" ` +
                            'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                            '</iframe>' +
                            '</div>'
                        );
                    }
                },

                {
                    name: 'vimeo',
                    url: [
                        /^vimeo\.com\/(\d+)/,
                        /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
                        /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
                        /^vimeo\.com\/channels\/[^/]+\/(\d+)/,
                        /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
                        /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
                        /^player\.vimeo\.com\/video\/(\d+)/
                    ],
                    html: match => {
                        const id = match[1];

                        return (
                            '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
                            `<iframe src="https://player.vimeo.com/video/${id}" ` +
                            'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                            'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
                            '</iframe>' +
                            '</div>'
                        );
                    }
                },

                {
                    name: 'instagram',
                    url: /^instagram\.com\/p\/(\w+)/
                },
                {
                    name: 'twitter',
                    url: /^twitter\.com/
                },
                {
                    name: 'googleMaps',
                    url: /^google\.com\/maps/
                },
                {
                    name: 'flickr',
                    url: /^flickr\.com/
                },
                {
                    name: 'facebook',
                    url: /^facebook\.com/
                }
            ];
            var dialog = this;
            var URL = dialog.getValueOf('tab-basic', 'src');
            /*var width = dialog.getValueOf('tab-basic', 'width');
            var height = dialog.getValueOf('tab-basic', 'height');
            var scrolling = dialog.getValueOf('tab-basic', 'scrolling');
            var frameborder = dialog.getValueOf('tab-basic', 'frameborder');*/
            var html = '';
            // Check Youtube / Instagram / Twitter
            var youtube = URL.match(/(?:http:|https:)*?\/\/(?:www\.|)(?:youtube\.com|m\.youtube\.com|youtu\.|youtube-nocookie\.com).*(?:v=|v%3D|v\/|(?:a|p)\/(?:a|u)\/\d.*\/|watch\?|vi(?:=|\/)|\/embed\/|oembed\?|be\/|e\/)([^&?%#\/\n]*)/);
            var instagram = URL.match(/(https?:\/\/(?:www\.)?instagram\.com\/p\/([^/?#&]+)).*/g);
            var twitter = URL.match(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/);
            if (youtube) {
                html = `<iframe frameborder="0" src="https://www.youtube.com/embed/${youtube[1]}" width="640" height="360" class="note-video-clip"></iframe><br/>`;
            } else if (instagram) {
                var instaId = URL.match(/\/p\/(.*?)\//);
                if (instaId) {
                    html = `<iframe frameborder="0" src="https://instagram.com/p/${instaId[1]}/embed/" width="612" height="710" class="note-video-clip"></iframe><br/>`;
                }
            } else if (twitter) {
                html = `<iframe border="0" frameborder="0" src="https://twitframe.com/show?url=${URL}" width="612" height="550" scrolling="no" allowtransparency="true" class="note-video-clip"></iframe><br/>`;
            }
            /*if (youtube) {
                html = `<iframe frameborder="${frameborder === true ? 1 : 0}" scrolling="${scrolling === true ? 'yes' : 'no'}" src="https://www.youtube.com/embed/${youtube[1]}" width="${width}" height="${height}" class="note-video-clip"></iframe><br/>`;
            } else if (instagram) {
                var instaId = URL.match(/\/p\/(.*?)\//);
                if (instaId) {
                    html = `<iframe frameborder="${frameborder === true ? 1 : 0}" scrolling="${scrolling === true ? 'yes' : 'no'}" src="https://instagram.com/p/${instaId[1]}/embed/" width="${width}" height="${height}" class="note-video-clip"></iframe><br/>`;
                }
            } else if (twitter) {
                html = `<iframe frameborder="${frameborder === true ? 1 : 0}" scrolling="${scrolling === true ? 'yes' : 'no'}" src="https://twitframe.com/show?url=${URL}" width="${width}" height="${height}" scrolling="no" allowtransparency="true" class="note-video-clip"></iframe><br/>`;
            }*/
            editor.insertHtml(html);
        }
    };
});