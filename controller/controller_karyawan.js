const {body, query, validationResult} = require('express-validator')
const moment            = require('moment')
const model_jabatan     = require('./../model/model_jabatan')
const model_agama       = require('./../model/model_agama')
const model_karyawan    = require('./../model/model_karyawan')


module.exports =
{

    halaman_list_semua_karyawan: async function(req, res) {
        // proses penarikan data
        let data = {
            karyawan: await model_karyawan.getAll_karyawan(),
            notifikasi: req.query.notif,
        }
        res.render('page-karyawan', data)
    },

    halaman_list_semua_karyawan2: async function(req, res) {
        // proses penarikan data
        let data = {
            karyawan: await model_karyawan.getAll_karyawan2(),
            notifikasi: req.query.notif,
        }
        res.render('page-karyawan2', data)
    },



    halaman_karyawan_detail: async function(req,res) {
        // ambil data karyawan 1 aja
        let data = {
            satukaryawan: await model_karyawan.getOne_karyawan( req.params.id_karyawan )
        }
        res.render('page-karyawan-detail', data)
    },

    halaman_karyawan_detail2: async function(req,res) {
        // ambil data karyawan 1 aja
        let data = {
            satukaryawan: await model_karyawan.getOne_karyawan2( req.params.id_karyawan )
        }
        res.render('page-karyawan-detail2', data)
    },



    halaman_karyawan_form_tambah: async function(req,res) {
        let data = {
            jabatan: await model_jabatan.getAll_jabatan(),
            agama: await model_agama.getAll_agama(),
        }
        res.render('page-karyawan-form-tambah', data)
    },

    halaman_karyawan_form_tambah2: async function(req,res) {
        let data = {
            agama: await model_agama.getAll_agama()
        }
        res.render('page-karyawan-form-tambah2', data)
    },



    proses_insert_karyawan: async function(req,res) {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            try {
                let insert = await model_karyawan.insert_karyawan( req )
                if (insert.affectedRows > 0) {
                    res.redirect('/karyawan?notif=Berhasil input karyawan baru')
                }
            } catch (error) {
                throw error
            }
        }
        else {
            let errorData = {
                pesanError: errors.array()
            }
            errorData.pesanError[0].fields
            res.render('page-karyawan-form-tambah', errorData)
        }
    },

    proses_insert_karyawan2: async function(req,res) {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            try {
                let insert = await model_karyawan.insert_karyawan2( req )
                if (insert.affectedRows > 0) {
                    res.redirect('/karyawan2?notif=Berhasil input karyawan baru')
                }
            } catch (error) {
                throw error
            }
        }
        else {
            let errorData = {
                pesanError: errors.array()
            }
            errorData.pesanError[0].fields
            res.render('page-karyawan-form-tambah2', errorData)
        }
    },



    proses_hapus: async function(req,res) {
        try {
            let hapus = await model_karyawan.hapusKaryawan( req.params.id_karyawan )
            if (hapus.affectedRows > 0) {
                res.redirect('/karyawan')
            }
        } catch (error) {
            throw error
        }
    },

    proses_hapus2: async function(req,res) {
        try {
            let hapus = await model_karyawan.hapusKaryawan2( req.params.id_karyawan )
            if (hapus.affectedRows > 0) {
                res.redirect('/karyawan2')
            }
        } catch (error) {
            throw error
        }
    },




    halaman_karyawan_form_edit: async function(req,res) {
        let data = {
            satukaryawan: await model_karyawan.getOne_karyawan( req.params.id_karyawan ),
            jabatan: await model_jabatan.getAll_jabatan(),
            agama: await model_agama.getAll_agama(),
            moment: moment,
        }
        res.render('page-karyawan-form-edit', data)
    },

    halaman_karyawan_form_edit2: async function(req,res) {
        let data = {
            satukaryawan: await model_karyawan.getOne_karyawan2( req.params.id_karyawan ),
            moment: moment,
        }
        res.render('page-karyawan-form-edit2', data)
    },


    proses_update: async function(req,res) {
        try {
            let update = await model_karyawan.update_karyawan( req )
            if (update.affectedRows > 0) {
                res.redirect('/karyawan?notif=Berhasil perbarui data karyawan')
            }
        } catch (error) {
            
        }
    },

    proses_update2: async function(req,res) {
        try {
            let update = await model_karyawan.update_karyawan2( req )
            if (update.affectedRows > 0) {
                res.redirect('/karyawan2?notif=Berhasil perbarui data karyawan')
            }
        } catch (error) {
            
        }
    }

}