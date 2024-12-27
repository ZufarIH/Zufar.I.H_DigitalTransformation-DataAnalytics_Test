const mysql = require('mysql2')
const db    = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_jfd_sep'
})
db.connect()


module.exports =
{

    getAll_karyawan: function() {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `SELECT 
                kry.*, jbt.nama as jabatan_nama, 
                jbt.singkatan as jabatan_singkatan, 
                agm.nama as agama_nama 
            FROM karyawan2 as kry 
            LEFT JOIN jabatan as jbt ON jbt.id = kry.jabatan 
            LEFT JOIN agama as agm ON agm.id = kry.agama`
    
            db.query(sqlSyntax, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    getAll_karyawan2: function() {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `SELECT * 
            FROM karyawan3`
    
            db.query(sqlSyntax, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    getOne_karyawan: function( idkry ) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `SELECT 
                kry.*, jbt.nama as jabatan_nama, 
                jbt.singkatan as jabatan_singkatan, 
                agm.nama as agama_nama 
            FROM karyawan2 as kry 
            LEFT JOIN jabatan as jbt ON jbt.id = kry.jabatan 
            LEFT JOIN agama as agm ON agm.id = kry.agama
            WHERE kry.id = ?`
    
            db.query(sqlSyntax, [idkry], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    getOne_karyawan2: function( idkry ) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `SELECT 
                *
            FROM karyawan3
            WHERE id = ?`
    
            // `SELECT 
            //     kry.*, agm.nama as agama_nama 
            // FROM karyawan3
            // LEFT JOIN agama as agm ON agm.id = kry.agama
            // WHERE kry.id = ?`
            db.query(sqlSyntax, [idkry], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    insert_karyawan: function( req ) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `INSERT INTO karyawan2 SET ?`
    
            let sqlData = {
                nama            : req.body.form_nama,
                nik             : req.body.form_nik,
                tanggal_lahir   : req.body.form_tanggal_lahir,
                alamat          : req.body.form_alamat,
                jabatan         : req.body.form_jabatan,
                agama           : req.body.form_agama,
            }
    
            db.query(sqlSyntax, sqlData, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    insert_karyawan2: function( req ) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `INSERT INTO karyawan3 SET ?`
    
            let sqlData = {
                name            : req.body.form_name,
                position        : req.body.form_position,
                join_date       : req.body.form_join_date,
                join_month      : req.body.form_join_month,
                join_year       : req.body.form_join_year,
                release_date    : req.body.form_release_date,
                release_month   : req.body.form_release_month,
                release_year    : req.body.form_release_year,
                experience      : req.body.form_experience,
                salary          : req.body.form_salary,
            }
    
            db.query(sqlSyntax, sqlData, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    hapusKaryawan: function(idkry) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `DELETE FROM karyawan2 WHERE id = ?`
    
            db.query(sqlSyntax, [idkry], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    hapusKaryawan2: function(idkry) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `DELETE FROM karyawan3 WHERE id = ?`
    
            db.query(sqlSyntax, [idkry], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    update_karyawan: function(req) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `UPDATE karyawan2 SET ? WHERE id = ?`
    
            let sqlData = {
                nama            : req.body.form_nama,
                nik             : req.body.form_nik,
                tanggal_lahir   : req.body.form_tanggal_lahir,
                alamat          : req.body.form_alamat,
                jabatan         : req.body.form_jabatan,
                agama           : req.body.form_agama,
            }
    
            db.query(sqlSyntax, [sqlData, req.params.id_karyawan], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    update_karyawan2: function(req) {
        return new Promise( (resolve, reject) => {
            let sqlSyntax =
            `UPDATE karyawan3 SET ? WHERE id = ?`
    
            let sqlData = {
                name            : req.body.form_name,
                position        : req.body.form_position,
                join_date       : req.body.form_join_date,
                join_month      : req.body.form_join_month,
                join_year       : req.body.form_join_year,
                release_date    : req.body.form_release_date,
                release_month   : req.body.form_release_month,
                release_year    : req.body.form_release_year,
                experience      : req.body.form_experience,
                salary          : req.body.form_salary,
            }
    
            db.query(sqlSyntax, [sqlData, req.params.id_karyawan], function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },
    

}