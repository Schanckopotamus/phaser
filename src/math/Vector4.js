//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji 
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl

var Class = require('../utils/Class');

var Vector4 = new Class({

    initialize:

    /**
     * [description]
     *
     * @class Vector4
     * @memberOf Phaser.Math
     * @constructor
     * @since 3.0.0
     *
     * @param {number} [x] - [description]
     * @param {number} [y] - [description]
     * @param {number} [z] - [description]
     * @param {number} [w] - [description]
     */
    function Vector4 (x, y, z, w)
    {
        if (typeof x === 'object')
        {
            this.x = x.x || 0;
            this.y = x.y || 0;
            this.z = x.z || 0;
            this.w = x.w || 0;
        }
        else
        {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = w || 0;
        }
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#clone
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    clone: function ()
    {
        return new Vector4(this.x, this.y, this.z, this.w);
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#copy
     * @since 3.0.0
     *
     * @param {[type]} src - [description]
     *
     * @return {[type]} [description]
     */
    copy: function (src)
    {
        this.x = src.x;
        this.y = src.y;
        this.z = src.z || 0;
        this.w = src.w || 0;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#equals
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    equals: function (v)
    {
        return ((this.x === v.x) && (this.y === v.y) && (this.z === v.z) && (this.w === v.w));
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#set
     * @since 3.0.0
     *
     * @param {[type]} x - [description]
     * @param {[type]} y - [description]
     * @param {[type]} z - [description]
     * @param {[type]} w - [description]
     *
     * @return {[type]} [description]
     */
    set: function (x, y, z, w)
    {
        if (typeof x === 'object')
        {
            this.x = x.x || 0;
            this.y = x.y || 0;
            this.z = x.z || 0;
            this.w = x.w || 0;
        }
        else
        {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = w || 0;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#add
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    add: function (v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z || 0;
        this.w += v.w || 0;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#subtract
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    subtract: function (v)
    {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z || 0;
        this.w -= v.w || 0;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#scale
     * @since 3.0.0
     *
     * @param {[type]} scale - [description]
     *
     * @return {[type]} [description]
     */
    scale: function (scale)
    {
        this.x *= scale;
        this.y *= scale;
        this.z *= scale;
        this.w *= scale;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#length
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    length: function ()
    {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;

        return Math.sqrt(x * x + y * y + z * z + w * w);
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#lengthSq
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    lengthSq: function ()
    {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;

        return x * x + y * y + z * z + w * w;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#normalize
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    normalize: function ()
    {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var len = x * x + y * y + z * z + w * w;

        if (len > 0)
        {
            len = 1 / Math.sqrt(len);

            this.x = x * len;
            this.y = y * len;
            this.z = z * len;
            this.w = w * len;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#dot
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    dot: function (v)
    {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#lerp
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     * @param {[type]} t - [description]
     *
     * @return {[type]} [description]
     */
    lerp: function (v, t)
    {
        if (t === undefined) { t = 0; }

        var ax = this.x;
        var ay = this.y;
        var az = this.z;
        var aw = this.w;

        this.x = ax + t * (v.x - ax);
        this.y = ay + t * (v.y - ay);
        this.z = az + t * (v.z - az);
        this.w = aw + t * (v.w - aw);

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#multiply
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    multiply: function (v)
    {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z || 1;
        this.w *= v.w || 1;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#divide
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    divide: function (v)
    {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z || 1;
        this.w /= v.w || 1;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#distance
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    distance: function (v)
    {
        var dx = v.x - this.x;
        var dy = v.y - this.y;
        var dz = v.z - this.z || 0;
        var dw = v.w - this.w || 0;

        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#distanceSq
     * @since 3.0.0
     *
     * @param {[type]} v - [description]
     *
     * @return {[type]} [description]
     */
    distanceSq: function (v)
    {
        var dx = v.x - this.x;
        var dy = v.y - this.y;
        var dz = v.z - this.z || 0;
        var dw = v.w - this.w || 0;

        return dx * dx + dy * dy + dz * dz + dw * dw;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#negate
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    negate: function ()
    {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#transformMat4
     * @since 3.0.0
     *
     * @param {[type]} mat - [description]
     *
     * @return {[type]} [description]
     */
    transformMat4: function (mat)
    {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var m = mat.val;

        this.x = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        this.y = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        this.w = m[3] * x + m[7] * y + m[11] * z + m[15] * w;

        return this;
    },

    //  TODO: is this really the same as Vector3?
    //  Also, what about this: http://molecularmusings.wordpress.com/2013/05/24/a-faster-quaternion-vector-multiplication/
    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#transformQuat
     * @since 3.0.0
     *
     * @param {[type]} q - [description]
     *
     * @return {[type]} [description]
     */
    transformQuat: function (q)
    {
        // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var qx = q.x;
        var qy = q.y;
        var qz = q.z;
        var qw = q.w;

        // calculate quat * vec
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Math.Vector4#reset
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    reset: function ()
    {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;

        return this;
    }

});

Vector4.prototype.sub = Vector4.prototype.subtract;
Vector4.prototype.mul = Vector4.prototype.multiply;
Vector4.prototype.div = Vector4.prototype.divide;
Vector4.prototype.dist = Vector4.prototype.distance;
Vector4.prototype.distSq = Vector4.prototype.distanceSq;
Vector4.prototype.len = Vector4.prototype.length;
Vector4.prototype.lenSq = Vector4.prototype.lengthSq;

module.exports = Vector4;
